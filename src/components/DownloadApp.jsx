import React from 'react'
import {FaGooglePlay, FaHandHoldingHeart} from 'react-icons/fa'
import {FaHandHoldingUsd} from 'react-icons/fa'
import googlePlay from '../images/google-play.svg'
import appStore from '../images/app-store.svg'

const DownloadApp = () => {
  return (
    <div className="bg-[#f5f5f6] py-10">
        <div className="w-[77%] mx-auto">
            <div className="flex justify-between">
                <div className="w-[33%]">
                    <div className="flex items-start space-x-4 bg-white rounded-2xl p-5">
                        <FaHandHoldingHeart className='text-6xl'/>
                        <div className="space-y-2">
                            <h5 className='font-bold text-xl'>24x7 Help</h5>
                            <p className="text-slate-500 text-sm font-DmSans">
                                If we fall short of your expectation in any way, let us know
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[33%]">
                    <div className="flex items-start space-x-4 bg-white rounded-2xl p-5">
                        <FaHandHoldingUsd className='text-6xl'/>
                        <div className="space-y-2">
                            <h5 className='font-bold text-xl'>Payment Trust</h5>
                            <p className="text-slate-500 text-sm font-DmSans">
                                All refunds come with no questions asked guarantee
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="w-[80%] space-y-6 float-right">
                        <h5 className='font-bold text-xl'>Download app</h5>
                        <div className="flex justify-between">
                            <img src={googlePlay} className='w-[47%]' alt="" />
                            <img src={appStore} className='w-[47%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp