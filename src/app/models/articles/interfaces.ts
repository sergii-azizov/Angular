import { Http } from '../../interfaces';

export interface Article {
  address: string;
  dob: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  phone: string;
  status: string;
  website: string;
  _links: {
    avatar: {
      href: string;
    };
    self: {
      href: string;
    };
  };
}

export interface Articles {
  result: Article[];
  _meta: {
    code: number;
    currentPage: number;
    message: string;
    pageCount: number;
    perPage: number;
    rateLimit: {
      limit: number;
      remaining: number;
      reset: number;
    };
    success: boolean;
    totalCount: number;
  };
}

export interface HttpArticles extends Http {
  data: {
    result: Article[];
    _meta: {
      code: number;
      currentPage: number;
      message: string;
      pageCount: number;
      perPage: number;
      rateLimit: {
        limit: number;
        remaining: number;
        reset: number;
      };
      success: boolean;
      totalCount: number;
    }
  };
}
