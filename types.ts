export interface Category {
    id: number;
    name: string;
    father_id: number | null;
    created_at: string;
    updated_at: string;
    childrens_recursive?: Category[];
  }