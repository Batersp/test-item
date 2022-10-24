export type InitialStateType = {
  profile: ProfileType;
};

export type ProfileType = {
  password?: string;
  name: string;
  photo: string;
  status: string;
  pets: PetType[];
};

export type PetType = {
  name: string;
  pet: string;
  photo: string;
  id: string;
};
