export type PostType = {
  id: string;
  title: string;
  category: CategoryType;
  image: string;
  date: string;
  text: string;
  comments: CommentType[];
};

export type CommentType = {
  id: string;
  text: string;
  author: string;
  date: string;
};

export type CategoryType = 'Treatment' | 'Training' | 'Feeding' | 'Care' | 'All';
