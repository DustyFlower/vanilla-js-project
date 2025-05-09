export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
};

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = {
    id: number,
    title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
    //   copy.hair = copy.hair / power;

}

export function moveUser(u: UserWithLaptopType, newAddress: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: newAddress
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, newHouseNumber: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: newHouseNumber
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, newLaptopTitle: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLaptopTitle
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBookToUser = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook =
    (u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) => ({
        ...u, books: u.books.filter(b => b !== bookToRemove)

    })

export const addNewCompanyToUser = (u: UserWithLaptopType & WithCompaniesType, newCompany: string) => ({
    ...u,
    companies: [...u.companies, {id: u.companies.length + 1, title: newCompany}]
})

export const updateCompany = (u: WithCompaniesType, oldCompany: string, newCompany: string) => ({
    ...u,
    companies: u.companies.map(c => (c.title === oldCompany) ? {
            ...c,
            title: newCompany
        } : c
    )
})

export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}