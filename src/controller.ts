import { Request, Response } from 'express';
import * as service from './service';
import {
  generateGeneralResponse,
  generatePaginationResponse,
  parsePaginationQuery,
} from './utils/controller-utils';
import {
  GeneralResponse,
  PaginationResponseData,
} from './models/controller-models';
import {
  Actor,
  Category,
  Customer,
  Film,
  Language,
  Staff,
  Store,
} from './models/data-models';

// Indexes

export function getIndex(req: Request, res: Response) {
  (req: Request, res: Response) => {
    res.send('DVD Rental API');
  };
}

// Films

export function getFilms(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Film>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getFilms(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getFilmByID(
  req: Request,
  res: Response<GeneralResponse<Film | null>>
) {
  const { id } = req.params;
  const film = service.getFilmByID(parseInt(id));
  if (film) {
    const response = generateGeneralResponse(
      true,
      'Success get film',
      film,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Languages

export function getLanguages(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Language>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getLanguages(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getLanguageByID(
  req: Request,
  res: Response<GeneralResponse<Language | null>>
) {
  const { id } = req.params;
  const language = service.getLanguageByID(parseInt(id));
  if (language) {
    const response = generateGeneralResponse(
      true,
      'Success get language',
      language,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Actors

export function getActors(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Actor>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getActors(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getActorByID(
  req: Request,
  res: Response<GeneralResponse<Actor | null>>
) {
  const { id } = req.params;
  const actor = service.getActorByID(parseInt(id));
  if (actor) {
    const response = generateGeneralResponse(
      true,
      'Success get actor',
      actor,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Categories

export function getCategories(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Category>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getCategories(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getCategoryByID(
  req: Request,
  res: Response<GeneralResponse<Category | null>>
) {
  const { id } = req.params;
  const category = service.getCategoryByID(parseInt(id));
  if (category) {
    const response = generateGeneralResponse(
      true,
      'Success get category',
      category,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Customers

export function getCustomers(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Customer>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getCustomers(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getCustomerByID(
  req: Request,
  res: Response<GeneralResponse<Customer | null>>
) {
  const { id } = req.params;
  const customer = service.getCustomerByID(parseInt(id));
  if (customer) {
    const response = generateGeneralResponse(
      true,
      'Success get customer',
      customer,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Stores & Staff

export function getStores(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Store>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getStores(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getStoreByID(
  req: Request,
  res: Response<GeneralResponse<Store | null>>
) {
  const { id } = req.params;
  const store = service.getStoreByID(parseInt(id));
  if (store) {
    const response = generateGeneralResponse(
      true,
      'Success get store',
      store,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

export function getStaff(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Staff>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getStaff(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getStaffByID(
  req: Request,
  res: Response<GeneralResponse<Staff | null>>
) {
  const { id } = req.params;
  const staff = service.getStaffByID(parseInt(id));
  if (staff) {
    const response = generateGeneralResponse(
      true,
      'Success get staff',
      staff,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}
