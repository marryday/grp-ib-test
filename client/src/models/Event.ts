export type Tag  = {
  ageLimit: string,
  duration: string,
  price: number,
  location: string,
}

export type Events ={
  _id: string,
  title: string,
  date: string,
  description: string,
  img: string,
  tag: Tag
  favorites: ['true', 'false']
}

export interface RootState {
  loading: boolean,
  events: Array<Events>,
}