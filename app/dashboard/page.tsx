'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import { 
  ChatBubbleLeftRightIcon,
  PlusIcon,
  ChartBarIcon,
  CogIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline'


interface Chatbot {
  id: string
  name: string
  description: string
  isActive: boolean
  createdAt: string
  analytics: {
    totalConversations: number
    totalMessages: number
    avgResponseTime: number
  }
}

export default function DashboardPage() {
  const { data: session } = useSession()
  const [chatbots, setChatbots] = useState<Chatbot[]>([])
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for demo
  useEffect(() => {
    setTimeout(() => {
      setChatbots([
        {
          id: '1',
          name: 'Customer Support Bot',
          description: 'Handles general customer inquiries and support requests',
          isActive: true,
          createdAt: '2024-01-15',
          analytics: {
            totalConversations: 156,
            totalMessages: 892,
            avgResponseTime: 1.2
          }
        },
        {
          id: '2',
          name: 'Appointment Scheduler',
          description: 'Manages appointment bookings and scheduling',
          isActive: true,
          createdAt: '2024-01-20',
          analytics: {
            totalConversations: 89,
            totalMessages: 445,
            avgResponseTime: 0.8
          }
        }
      ])
      setIsLoading(false)
    }, 1000)
  }, [])

  const toggleChatbotStatus = (id: string) => {
    setChatbots(prev => prev.map(bot => 
      bot.id === id ? { ...bot, isActive: !bot.isActive } : bot
    ))
  }

  const totalConversations = chatbots.reduce((sum, bot) => sum + bot.analytics.totalConversations, 0)
  const totalMessages = chatbots.reduce((sum, bot) => sum + bot.analytics.totalMessages, 0)
  const avgResponseTime = chatbots.reduce((sum, bot) => sum + bot.analytics.avgResponseTime, 0) / chatbots.length

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gradient">AutomateHub Studio</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome back, {session?.user?.name || 'Admin'}</span>
                <button 
                  onClick={() => signOut()}
                  className="text-red-600 hover:text-red-700"
                >
                  Sign Out
                </button>
                <a href="/" className="text-primary-600 hover:text-primary-700">
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your AI chatbots and monitor performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Chatbots</p>
                <p className="text-2xl font-bold text-gray-900">{chatbots.filter(bot => bot.isActive).length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold text-gray-900">{totalConversations}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold text-gray-900">{totalMessages}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <ChartBarIcon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-900">{avgResponseTime.toFixed(1)}s</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: ChartBarIcon },
                { id: 'chatbots', name: 'Chatbots', icon: ChatBubbleLeftRightIcon },
                { id: 'analytics', name: 'Analytics', icon: ChartBarIcon },
                { id: 'settings', name: 'Settings', icon: CogIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                  <button className="btn-primary flex items-center">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    New Chatbot
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Conversations */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Recent Conversations</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium text-sm">Customer #{i}</p>
                            <p className="text-xs text-gray-500">2 minutes ago</p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Completed
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <PlusIcon className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="font-medium text-sm">Create New Chatbot</p>
                            <p className="text-xs text-gray-500">Set up a new AI assistant</p>
                          </div>
                        </div>
                      </button>
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <ChartBarIcon className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="font-medium text-sm">View Analytics</p>
                            <p className="text-xs text-gray-500">Check performance metrics</p>
                          </div>
                        </div>
                      </button>
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <CogIcon className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="font-medium text-sm">Configure Settings</p>
                            <p className="text-xs text-gray-500">Update chatbot settings</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chatbots' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Your Chatbots</h2>
                  <button className="btn-primary flex items-center">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    New Chatbot
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {chatbots.map((chatbot) => (
                    <motion.div
                      key={chatbot.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{chatbot.name}</h3>
                          <p className="text-sm text-gray-600">{chatbot.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleChatbotStatus(chatbot.id)}
                            className={`p-2 rounded-lg ${
                              chatbot.isActive 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {chatbot.isActive ? (
                              <PauseIcon className="w-4 h-4" />
                            ) : (
                              <PlayIcon className="w-4 h-4" />
                            )}
                          </button>
                          <button className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <EyeIcon className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-100 text-red-600 rounded-lg">
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{chatbot.analytics.totalConversations}</p>
                          <p className="text-xs text-gray-600">Conversations</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{chatbot.analytics.totalMessages}</p>
                          <p className="text-xs text-gray-600">Messages</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{chatbot.analytics.avgResponseTime}s</p>
                          <p className="text-xs text-gray-600">Avg Response</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            chatbot.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {chatbot.isActive ? 'Active' : 'Inactive'}
                          </span>
                          <span className="text-xs text-gray-500">
                            Created {new Date(chatbot.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics & Reports</h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <ChartBarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Detailed analytics and reporting features coming soon!</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <CogIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Account settings and configuration options coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 