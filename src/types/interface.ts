export interface item {
  id: number;
  name: string;
  description: string | undefined;
  url: string | undefined;
  image: string;
  secondImage?: string | null;
  nameLink?: string | undefined;
  setIsOpen?: (isOpen: boolean) => void;
}
