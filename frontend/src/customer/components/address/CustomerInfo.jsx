import React from 'react'

const CustomerInfo = ({whoami}) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
        <div className="bg-gray-50 p-3 rounded-md border">
            <h4 className="text-gray-800 font-medium">{whoami?.name}</h4>
        </div>
    </div>
  )
}

export default CustomerInfo
