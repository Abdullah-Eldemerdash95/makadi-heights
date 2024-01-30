function Modal({modalType, setModalType, data}) {
    const [name, email, phone, budget,msg] = data;
    return (
    <div id="myModal" className={`modal ${modalType !== "" ? "block" : "hidden"} fixed z-[100] left-0 top-0 w-full h-full overflow-auto bg-[#0006]`}>
        <div className="modal-content bg-[white] my-[15%] mx-[auto] p-[5%] border-[1px] border-[#888] w-[88%] relative">
          {modalType !== "" ? <span class="close text-[#aaa] text-[28px] font-[400] hover:color-black focus:color-grey cursor-pointer absolute top-3 right-6" onClick={()=>setModalType("")}>&times;</span> : ""}
          {modalType === "trueForm" && <menu className="grid grid-cols-[auto_auto_auto] gap-[20px] list-none ">
            <li>
                name: {name}
            </li>
            <li>
              Email: 
              <a className="text-[#3282b8] decoration-[none] hover:text-[#5247e6]" href={`mailto:${email}`}> {email}</a>
            </li>
            <li>Phone Number: <a className="text-[#3282b8]  decoration-[none] hover:text-[#5247e6]" href={`tel:${phone}`}>{phone}</a></li>
            <li>
                budget: {budget}
            </li>
            <li>
                msg: {msg}
            </li>
            <li>
                you submited your call request.
            </li>
          </menu>}
          {modalType === "errorForm" && "you encountered problem please fill form again with required specs."}
        </div>
    </div>);
}

export default Modal