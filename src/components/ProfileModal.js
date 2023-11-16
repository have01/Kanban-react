import React from "react";
import ProfileVideo from "../assests/bg.png"
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBills } from "react-icons/fa6";

export default function ProfileModal({ setShowModal, showModal }) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="absolute right-0 mx-auto w-[770px]">
                            {/*content*/}
                            <div className="border-0 h-[730px] bg-[#F7F3FF] rounded-lg shadow-lg relative right-0 flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start h-[282px] justify-between border-b-6 border-solid border-blueGray-200 rounded-t">
                                    <img src={ProfileVideo} alt="porfilevideo" srcset="" />
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex w-[100%] flex-row justify-around">
                                    <div>
                                        <p><span >Dheerendra kumar</span>  <br />
                                            Ui/Ux Designer</p>
                                    </div>
                                    <div className="buttons__container">
                                        <button className="py-1 px-4  bg-[#2B1845] text-white rounded-0 rounded-bl-[15px] rounded-tr-[15px]">Shortlist</button>
                                        <button className="py-1 px-4 mx-2 text-black rounded-0 rounded-bl-[15px] rounded-tr-[15px] border-2 border-[#6F3EB2]">Message</button>
                                        <button className="py-1 px-4  text-black rounded-0 rounded-bl-[15px] rounded-tr-[15px] border-2 border-[#FF8383]">Decline</button>

                                    </div>
                                </div>

                                <div className="relative p-6 flex w-[100%] flex-row justify-around">
                                    <div className="buttons__container" >
                                        <p className=' flex flex-row items-center text-[16px] text-[#555555]'><IoLocationOutline className="mr-1" />Chandigarh</p>
                                        <p className='flex flex-row items-center text-[16px] text-[#555555]'><IoMdCall className="mr-1" />9876543XXX</p>
                                        <p className='flex flex-row items-center text-[16px] text-[#555555]'><CiMail className="mr-1" />mail@domain.com</p>

                                    </div>
                                    <div className="buttons__container">
                                        <p className=' flex flex-row items-center text-[16px] text-[#555555]'><IoLocationOutline className="mr-1" />Excepted Salary: INR 12,50,000/year</p>
                                        <p className='flex flex-row items-center text-[16px] text-[#555555]'><FaMoneyBills className="mr-1" />Preferred Employment : Full Time  </p>
                                        <p className='flex flex-row items-center text-[16px] text-[#555555]'><SlCalender className="mr-1" /> Notice Period: 30 days</p>

                                    </div>
                                </div>
                                <div className="ml-5 font-bold">DETAILS</div>
                                <div className="flex  border-t-2  py-3 px-6 flex-col border-[#E5D7FF] border-blueGray-200 rounded-b">
                                    <h4 className="text-[24px] font-bold">About Me</h4>
                                    <p>I’m a Creative Director and Designer based in New York, and have spent the last thirteen years helping to bring brands to life through strategic design. I don’t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct.</p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}