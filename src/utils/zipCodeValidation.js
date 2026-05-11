const zipCodeValidation = async (zipCode, formik , manualEdit) => {
  if(window?.google?.maps){
    const geocoder = new window.google.maps.Geocoder();
  
    geocoder.geocode({ address: zipCode }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        const city = results[0].address_components.find((component) =>
          component.types.includes("locality")
        );
        const state = results[0].address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        );
  
        const pinCode = results[0].address_components.find((component) =>
          component.types.includes("postal_code")
        );
  
        const country = results[0].address_components.find((component) =>
          component.types.includes("country")
        );
  
        if (pinCode) {
  
          if(!manualEdit) {
          //autofill city
          if (city) {
            formik.setFieldValue("city", city?.long_name);
          } else {
            formik.setFieldValue("city", "");
          }
  
          //autofill the state
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
  
        }
        } else {
          formik.setFieldError("postalCode", "Invalid ZIP code");
        }
      } else {
        formik.setFieldError("postalCode", "Invalid ZIP code");
      }
    });

  }
};

export default zipCodeValidation;
