'use client'
import React from 'react'
import PopularProductsCard from './PopularProducsCard'
import SalesSummaryCard from './SalesSummaryCard'
import PurchaseSummaryCard from './PurchaseSummaryCard'
import ExpenseSummaryCard from './ExpenseSummaryCard'
import StatCard from './StatCard'
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp
} from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 -mb-2 custom-grid-rows ">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummaryCard />
      <StatCard
        title="Customer Expenses"
        primaryIcon={<Package className="text-purple-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: 'Customer Growth',
            amount: '175.00',
            changePercentage: 84,
            IconComponent: TrendingUp
          },
          {
            title: 'Expenses',
            amount: '75.00',
            changePercentage: -124,
            IconComponent: TrendingDown
          }
        ]}
      />
      <StatCard
        title="Pending Orders / Dues"
        primaryIcon={<CheckCircle className="text-purple-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: 'Pending Orders',
            amount: '375.00',
            changePercentage: 33,
            IconComponent: TrendingUp
          },
          {
            title: 'Dues',
            amount: '22.00',
            changePercentage: -16,
            IconComponent: TrendingDown
          }
        ]}
      />
      <StatCard
        title="Sales / Discount"
        primaryIcon={<Tag className="text-purple-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: 'Sales',
            amount: '725.00',
            changePercentage: 84,
            IconComponent: TrendingUp
          },
          {
            title: 'Discount',
            amount: '15.00',
            changePercentage: -4,
            IconComponent: TrendingDown
          }
        ]}
      />
    </div>
  )
}

export default Dashboard
