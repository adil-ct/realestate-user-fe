import React, { useState, useCallback, memo, useEffect } from "react";
import { Autocomplete } from "@mui/material";

import MKInput from "components/custom/MKInput";
import useDebounce from "hooks/useDebounce";

const AddressAutocomplete = memo((props) => {
	const { formik, disabled, setShowOtherDetails, showDetails } = props;

	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState([]);
	const [manualEntry, setManualEntry] = useState(false);
	const [open, setOpen] = useState(false);

	const debouncedSearchPlace = useDebounce(inputValue, 1000);

	const showAdditionalDetails = () => {
		setShowOtherDetails((prevState) => ({
			...prevState,
			manuallEdit: true,
		}));
		setManualEntry(true);
		setOptions([]);
	};

	const fetchPlaceDetails = useCallback((placeId) => {
		if (window?.google?.maps) {
			const placeService = new window.google.maps.places.PlacesService(
				document.createElement("div")
			);

			const request = {
				placeId: placeId,
			};

			placeService.getDetails(request, (place, status) => {
				if (
					window.google?.maps?.places?.PlacesServiceStatus?.OK &&
					status === window.google?.maps?.places?.PlacesServiceStatus?.OK
				) {
					// formik.setFieldValue("address1", place?.formatted_address);

					const addressComponents = place?.address_components;

					const city = addressComponents.find((component) =>
						component.types.includes("locality")
					);

					const zip = addressComponents.find((component) =>
						component.types.includes("postal_code")
					);

					const state = addressComponents.find((component) =>
						component.types.includes("administrative_area_level_1")
					);

					const country = addressComponents.find((component) =>
						component.types.includes("country")
					);

					//Autofill city
					if (city) {
						formik.setFieldValue("city", city?.long_name);
					} else {
						formik.setFieldValue("city", "");
					}

					//Autofill ZIP code
					if (zip) {
						formik.setFieldValue("postalCode", zip?.long_name);
					} else {
						formik.setFieldValue("postalCode", "");
					}

					//Autofill state
					if (country) {
						formik.setFieldValue("country", {
							label: country?.long_name,
							value: country?.short_name,
						});
					} else {
						formik.setFieldValue("country", {
							label: "",
							value: "",
						});
					}

					//Autofill state
					if (state) {
						formik.setFieldValue("state", {
							label: state?.long_name,
							value: state?.short_name,
						});
					} else {
						formik.setFieldValue("state", {
							label: "",
							value: "",
						});
					}
				} else {
					console.error(`Failed to fetch place details: ${status}`);
				}
			});
		}
	}, []);

	const handleSelect = useCallback(
		(address) => {
			if (address) {
				// if (address.manualEdit) {
				//   setManualEntry(true);
				//   setShowOtherDetails((prevState) => ({
				//     ...prevState,
				//     manuallEdit: true, // Corrected the key name here
				//   }));
				// } else {

				formik.setFieldValue(
					"address1",
					address.structured_formatting.main_text
				);

				fetchPlaceDetails(address.place_id);
				setShowOtherDetails(() => ({
					manuallEdit: true,
					showDetail: true,
				}));
			}
			// }
		},
		[formik, fetchPlaceDetails]
	);

	const handleInputChange = useCallback(
		(event, newInputValue) => {
			if (!event?.target?.value?.length) {
				setOptions([]);
				formik.setFieldValue("address1", "");
			}
			setInputValue(newInputValue);
		},
		[formik]
	);

	useEffect(() => {
		if (debouncedSearchPlace?.length) {
			if (manualEntry) {
				// If manualEntry is true, clear the options
				setOptions([]);
			} else {
				const request = {
					input: debouncedSearchPlace,
				};
				if (window?.google?.maps) {
					const service = new window.google.maps.places.AutocompleteService();

					service.getPlacePredictions(request, (predictions, status) => {
						if (
              window?.google?.maps && status === window?.google?.maps?.places?.PlacesServiceStatus.OK
						) {
							// const enterManually = {
							//   description: "Enter Manually",
							//   manualEdit: true,
							//   structured_formatting: {
							//     main_text: "",
							//   },
							//   place_id: null,
							// };
							// predictions.push(enterManually);
							setOptions(predictions);
						} else {
							console.error(
								`Autocomplete request was not successful: ${status}`
							);
						}
					});
				}
			}
		}
	}, [debouncedSearchPlace]);

	return (
		<Autocomplete
			id="google-map-demo"
			getOptionLabel={(option) =>
				typeof option === "string"
					? option
					: option?.structured_formatting?.main_text
			}
			filterOptions={(x) => x}
			options={options}
			autoComplete
			includeInputInList
			filterSelectedOptions
			noOptionsText={<span style={{ color: "black" }}>No locations</span>}
			onChange={(event, newValue) => {
				handleSelect(newValue);
			}}
			onInputChange={handleInputChange}
			inputValue={inputValue}
			open={open}
			onOpen={() => {
				if (inputValue && !manualEntry && !showDetails) {
					setOpen(true);
				}
			}}
			onClose={() => setOpen(false)}
			freeSolo={manualEntry || showDetails}
			isOptionEqualToValue={(option, value) =>
				option.place_id === value.place_id
			}
			renderInput={(params) => (
				<MKInput
					fullWidth
					{...params}
					label="Address"
					aria-label="address-line-1"
					minRows={1}
					requiredLabel
					id="filled-multiline-flexible1"
					name="address1"
					placeholder="Street address"
					value={formik.values.address1}
					disabled={disabled}
					onChange={formik.handleChange}
					error={formik.touched.address1 && Boolean(formik.errors.address1)}
					helperText={formik.touched.address1 ? formik.errors.address1 : ""}
					manualEntry
					showAdditionalDetails={showAdditionalDetails}
				/>
			)}
			renderOption={(props, option) => {
				const { description } = option;
				return (
					<span {...props} style={{ color: "black" }}>
						{description}
					</span>
				);
			}}
		/>
	);
});

export default AddressAutocomplete;
