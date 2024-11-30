export interface Product {
  productId: string
  name: string
  price: number
  rating?: number
  stockQuantity: number
}

export interface NewProduct {
  name: string
  price: number
  rating?: number
  stockQuantity: number
}

export interface SalesSummary {
  salesSummaryId: string
  totalValue: number
  changePercentage?: number
  date: string
}

export interface PurchaseSummary {
  purchaseSummaryId: string
  totalPurchased: number
  changePercentage?: number
  date: string
}

export interface ExpenseSummary {
  expenseSummarId: string
  totalExpenses: number
  date: string
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string
  category: string
  amount: string
  date: string
}

export interface DashboardMetrics {
  popularProducts: Product[]
  salesSummary: SalesSummary[]
  purchaseSummary: PurchaseSummary[]
  expenseSummary: ExpenseSummary[]
  expenseByCategorySummary: ExpenseByCategorySummary[]
}

export interface User {
  userId: string
  name: string
  email: string
}

export type RatingProps = {
  rating: number
}

export type StatDetail = {
  title: string
  amount: string
  changePercentage: number
  IconComponent: LucideIcon
}

export type StatCardProps = {
  title: string
  primaryIcon: JSX.Element
  details: StatDetail[]
  dateRange: string
}

export type ProductFormData = {
  name: string
  price: number
  stockQuantity: number
  rating: number
}

export type CreateProductModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreate: (formData: ProductFormData) => void
}

export type UserSetting = {
  label: string
  value: string | boolean
  type: 'text' | 'toggle'
}

export type ProductFormData = {
  name: string
  price: number
  stockQuantity: number
  rating: number
}
