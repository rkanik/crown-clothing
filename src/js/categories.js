const format = "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

export default [
   {
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1542394613-26460f1f378c',
      id: 1,
      linkUrl: 'shop/hats'
   },
   {
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      id: 2,
      linkUrl: 'shop/jackets'
   },
   {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
      id: 3,
      linkUrl: 'shop/sneakers'
   },
   {
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
   },
   {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
   }
].map(a => ({ ...a, imageUrl: a.imageUrl + format }))