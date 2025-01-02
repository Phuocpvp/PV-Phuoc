import { BarCharts } from '@/components/BarChart'
import { Switch } from '@/components/ui/switch'
import React from 'react'

export default function page() {
  return (
    <div><Switch id="airplane-mode" />
    <BarCharts/>
    </div>
  )
}
