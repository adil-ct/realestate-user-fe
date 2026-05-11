import React, { useState } from "react";

// static imports
import DepositScreens from "components/Modal/DepositScreens";

const DemoModal = () => {
  const [openDeposit, setOpenDeposit] = useState(false);
  return (
    <>
      <button onClick={() => setOpenDeposit(true)}>Click</button>
      <br />
      <br />
      <DepositScreens open={openDeposit} setOpen={setOpenDeposit} />
    </>
  );
};

export default DemoModal;
