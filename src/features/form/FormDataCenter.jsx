import { useState } from "react";
import checkedVec from "/checkedVec.svg";
import Modal from "./Modal";

function FormDataCenter() {
    const [modalType, setModalType] = useState("");

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [budget,setBudget] = useState();
    const [msg,setMsg] = useState("");
    const [checkboxVal, setCheckboxVal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validNameReges = /^[a-zA-Z]/;
        const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validPhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        const validBudgetRegex = /^[0-9]/;

        if(validNameReges.test(name) && validEmailRegex.test(email) && validPhoneRegex.test(phone) && validBudgetRegex.test(budget) && msg.length !== 0 && checkboxVal ) {
           setModalType("trueForm")
        } else {setModalType("errorForm")}
    }

    return (
        <>
        <form action="" className="flex  flex-col gap-[26px]" onSubmit={handleSubmit}>
            <p className="mb-[18px]  w-[26.11vw] h-[58px] top-[78px] left-[731px] text-[18px] leading-[29px] text-[#21436E]">Enter your details and our representative will get back to you shortly</p>
                <div className="mb-[22px] h-[41px] w-full">
                    <input name="name" placeholder="Your name"  required className="inputNewStyle" onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-[22px] h-[41px]">
                    <input name="email" placeholder="Your email"  required className="inputNewStyle" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-[22px] h-[41px]">
                    <input name="phone" placeholder="Phone: +20xxxxxxxx" required className="inputNewStyle" onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="mb-[22px] h-[41px]">
                    <input name="budget" placeholder="Choose your budget" required  className="inputNewStyle" onChange={(e)=> setBudget(e.target.value)}/>
                </div>
                <div className="h-[41px]">
                    <input type="text" name="msg"  placeholder="Enter you message" required className="inputNewStyle" onChange={(e)=> setMsg(e.target.value)}/>
                </div>
                <div className="mb-[14px] h-[26px] flex gap-[13px] relative">
                    <input type="checkbox" name="accpetCond" className="select-none invisible w-[18px]" onChange={()=> setCheckboxVal(!checkboxVal)} />
                        <span className="absolute top-[3px] left-[3px] h-[18px] w-[18px] border-[1px] border-[#646464]" onClick={()=> setCheckboxVal(!checkboxVal)}></span>
                        <span className={`absolute top-[3px] left-[3px] h-[18px] w-[18px] ${checkboxVal ? "block" : "hidden" }`} onClick={()=> setCheckboxVal(!checkboxVal)}><img src={checkedVec} alt="checked" /></span>
                    <label htmlFor="accpetCond" className="font-[600] font-['Sharp_Sans_No1_Medium'] text-[14px] leading-[25px] text-[#646464]">
                        I agree to the processing of personal data
                    </label>
                </div>
            <button className="h-[50px] w-[15.3472vw] bg-[#21436E] text-white font-['Shanti'] text-[14px] font-[400] leading-[19px] tracking-[0.3px] uppercase" >
            leave a Call request
            </button>
      </form>
    <Modal modalType={modalType} setModalType={setModalType} data={[name, email, phone, budget,msg]}/>
    </>
    )
}

export default FormDataCenter

