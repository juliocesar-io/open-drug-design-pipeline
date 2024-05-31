import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'

import { labels, priorities, statuses } from '../data/data'
import type { Task , Sp } from '../data/schema'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableColumnHeaderSp from './DataTableColumnHeaderSp.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import DataTableRowActionsSps from './DataTableRowActionsSps.vue'
import { Checkbox } from './../../ui/checkbox'
import { Badge } from './../../ui/badge'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Task' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Title' }),

    cell: ({ row }) => {
      const label = labels.find(label => label.value === row.original.label)

      return h('div', { class: 'flex space-x-2' }, [
        label ? h(Badge, { variant: 'outline' }, () => label.label) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('title')),
      ])
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),

    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status'),
      )

      if (!status)
        return null

      return h('div', { class: 'flex w-[100px] items-center' }, [
        status.icon && h(status.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
        h('span', status.label),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Priority' }),
    cell: ({ row }) => {
      const priority = priorities.find(
        priority => priority.value === row.getValue('priority'),
      )

      if (!priority)
        return null

      return h('div', { class: 'flex items-center' }, [
        priority.icon && h(priority.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
        h('span', {}, priority.label),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]

export const columnsSps: ColumnDef<Sp>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'ID' }),
    cell: ({ row }) => h('div', { class: 'w-30' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'prediction',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Prediction' }),

    cell: ({ row }) => {
      const status = statuses.find(
        prediction => prediction.value === row.getValue('prediction'),
      )

      if (!status)
        return null

      return h('div', { class: 'flex w-[100px] items-center' }, [
        status.icon && h(status.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
        h('span', status.label),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'sec_sp_1',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Sec SP 1' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('sec_sp_1')),
  },
  {
    accessorKey: 'sec_sp_2',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Sec SP 2' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('sec_sp_2')),
  },
  {
    accessorKey: 'tat_sp_1',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Tat SP 1' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('tat_sp_1')),
  },
  {
    accessorKey: 'tat_sp_2',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Tat SP 2' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('tat_sp_2')),
  },
  {
    accessorKey: 'tat_sp_3',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'Tat SP 3' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('tat_sp_3')),
  },
  {
    accessorKey: 'cs_position',
    header: ({ column }) => h(DataTableColumnHeaderSp, { column, title: 'CS Position' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('cs_position')),
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActionsSps, { row }),
  },
];