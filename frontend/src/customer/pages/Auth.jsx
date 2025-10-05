import React, { useState, useEffect } from 'react'
import {whoamiAPI } from '../../api/auth.api'
import Logout from '../../auth/components/Logout'

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    fetchUserProfile()
  }, [])

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      const userData = await whoamiAPI()
      setUser(userData)
      setEditForm({
        name: userData.name,
        email: userData.email
      })
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
      setError('Failed to load profile information')
    } finally {
      setLoading(false)
    }
  }


  const handleEditToggle = () => {
    setIsEditing(!isEditing)
    if (isEditing) {
      // Reset form if canceling edit
      setEditForm({
        name: user.name,
        email: user.email
      })
    }
  }

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveProfile = async () => {
    try {
      // Add API call to update profile when you implement it
      // const updatedUser = await updateProfileAPI(editForm)
      // setUser(updatedUser)
      console.log('Profile update API not implemented yet:', editForm)
      setIsEditing(false)
    } catch (err) {
      console.error('Failed to update profile:', err)
      setError('Failed to update profile')
    }
  }

  const getRoleBadge = (role) => {
    const roleStyles = {
      admin: 'bg-purple-100 text-purple-800',
      seller: 'bg-blue-100 text-blue-800',
      customer: 'bg-green-100 text-green-800'
    }
    return roleStyles[role] || 'bg-gray-100 text-gray-800'
  }

  const getVerificationStatus = (isVerified) => {
    return isVerified ? {
      text: 'Verified',
      icon: '✓',
      style: 'bg-green-100 text-green-800'
    } : {
      text: 'Not Verified',
      icon: '⚠',
      style: 'bg-red-100 text-red-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">❌</div>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchUserProfile}
            className="mt-4 px-4 py-2 bg-indigo-600  rounded-md hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const verificationStatus = getVerificationStatus(user?.is_verified)

  return (
    <div className='w-full min-h-screen'>
  <div className="p-6 bg-gradient-to-br from-black via-lime-50 to-black w-full">
    <div className=" mx-auto">
      <div className='flex items-center justify-between max-w-[1920px] mx-auto'>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-black">
              {user?.name?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{user?.name}</h3>
            <p className="text-black">{user?.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleEditToggle}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-md transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>

          <Logout/>
        </div>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default UserProfile