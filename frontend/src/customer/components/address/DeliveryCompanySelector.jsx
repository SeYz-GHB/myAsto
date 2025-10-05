import React from 'react'

const DeliveryCompanySelector = ({isPhnomPenh, isProvince,handleDeliveryCompanySelect,selectedDeliveryCompany,vet_logo,jnt_logo,grab_logo, address, setAddress, setOrderNotes}) => {
  return (
    <div>
      {(isPhnomPenh || isProvince) && (
        <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800 mb-4">Choose Delivery Company</h4>
            
            {/* Province Delivery Options */}
            {isProvince && (
            <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-3">Available for province delivery:</p>
                <div className="grid grid-cols-2 gap-4">
                {/* VET Option */}
                <div 
                    onClick={() => handleDeliveryCompanySelect('VET')}
                    required
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedDeliveryCompany === 'VET' 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                    <div className="flex flex-col items-center text-center">
                    <img src={vet_logo} alt="VET Express" className="h-12 w-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">VET Express</span>
                    <span className="text-xs text-gray-500 mt-1">2-3 days delivery</span>
                    </div>
                </div>

                {/* J&T Option */}
                <div 
                    onClick={() => handleDeliveryCompanySelect('JNT')}
                    required
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedDeliveryCompany === 'JNT' 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                    <div className="flex flex-col items-center text-center">
                    <img src={jnt_logo} alt="J&T Express" className="h-12 w-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">J&T Express</span>
                    <span className="text-xs text-gray-500 mt-1">2-3 days delivery</span>
                    </div>
                </div>
                </div>
            </div>
            )}

            {/* Phnom Penh Delivery Option */}
            {isPhnomPenh && (
            <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-3">Available for Phnom Penh delivery:</p>
                <div 
                onClick={() => handleDeliveryCompanySelect('GRAB')}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md max-w-xs ${
                    selectedDeliveryCompany === 'GRAB' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                >
                <div className="flex flex-col items-center text-center">
                    <img src={grab_logo} alt="Grab Express" className="h-12 w-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">Grab Express</span>
                    <span className="text-xs text-gray-500 mt-1">Same day delivery</span>
                </div>
                </div>
            </div>
            )}

            {/* Selected Company Confirmation */}
            {selectedDeliveryCompany && (
            <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-md">
                <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-800 font-medium">
                    {selectedDeliveryCompany === 'VET' && 'VET Express selected'}
                    {selectedDeliveryCompany === 'JNT' && 'J&T Express selected'}
                    {selectedDeliveryCompany === 'GRAB' && 'Grab Express selected'}
                </span>
                </div>
            </div>
            )}

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes <span className='text-gray-500'>-(optional)</span></label>
            <textarea 
                placeholder="Enter your full address (street, building, etc.)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                
            />
            </div>
        </div>
        )}
    </div>
  )
}

export default DeliveryCompanySelector
