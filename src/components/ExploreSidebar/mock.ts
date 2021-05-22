import { ExploreSideBarSection } from './ExploreSidebar'
export default [
  {
    name: 'Price',
    type: 'checkbox',
    options: [
      {
        name: 'under-50',
        label: 'Under $50'
      },
      {
        name: 'under-100',
        label: 'Under $100'
      },
      {
        name: 'under-150',
        label: 'Under $150'
      },
      {
        name: 'under-200',
        label: 'Under $200'
      },
      {
        name: 'free',
        label: 'Free'
      },
      {
        name: 'discounted',
        label: 'Discounted'
      }
    ]
  },
  {
    name: 'Sort by',
    type: 'radio',
    options: [
      {
        name: 'sort-by',
        label: 'High to low',
        value: 'HTL'
      },
      {
        name: 'sort-by',
        label: 'Low to high',
        value: 'LTH'
      }
    ]
  },
  {
    name: 'System',
    type: 'checkbox',
    options: [
      {
        name: 'windows',
        label: 'Windows'
      },
      {
        name: 'linux',
        label: 'Linux'
      },
      {
        name: 'mac',
        label: 'Mac'
      }
    ]
  },
  {
    name: 'Genre',
    type: 'checkbox',
    options: [
      {
        name: 'action',
        label: 'Action'
      },
      {
        name: 'adventure',
        label: 'Adventure'
      },
      {
        name: 'fps',
        label: 'FPS'
      },
      {
        name: 'mmorpg',
        label: 'MMORPG'
      }
    ]
  }
] as ExploreSideBarSection[]
