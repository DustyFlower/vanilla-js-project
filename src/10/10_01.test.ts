import {
    addNewBooksToUser,
    addNewCompanyToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBookToUser,
    updateCompany, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from './10_01';
import {User} from '../06/06-callbacks';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const UserWithNewLaptop = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(UserWithNewLaptop)
    expect(user.address).toBe(UserWithNewLaptop.address)
    expect(user.laptop).not.toBe(UserWithNewLaptop.laptop)
    expect(user.laptop.title).toBe('Zenbook')
    expect(UserWithNewLaptop.laptop.title).toBe('Macbook')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const UserInTheNewHouse = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(UserInTheNewHouse)
    expect(user.books).toBe(UserInTheNewHouse.books)
    expect(user.laptop).toBe(UserInTheNewHouse.laptop)
    expect(user.address).not.toBe(UserInTheNewHouse.address)
    expect(UserInTheNewHouse.address.house).toBe(99)
    expect(user.address.house).toBe(12)

})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const UserWithNewBooks = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(UserWithNewBooks)
    expect(user.books).not.toBe(UserWithNewBooks.books)
    expect(UserWithNewBooks.books).toEqual(['css', 'html', 'js', 'react', 'ts'])
    expect(user.laptop).toBe(UserWithNewBooks.laptop)
    expect(user.address).toBe(UserWithNewBooks.address)
    expect(UserWithNewBooks.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update js to ts in users books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const UserWithTSBook = updateBookToUser(user, 'js', 'ts');

    expect(user).not.toBe(UserWithTSBook)
    expect(user.books).not.toBe(UserWithTSBook.books)
    expect(UserWithTSBook.books).toEqual(['css', 'html', 'ts', 'react'])
    expect(user.laptop).toBe(UserWithTSBook.laptop)
    expect(user.address).toBe(UserWithTSBook.address)
    expect(UserWithTSBook.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],

    }

    const UserWithoutJSBook = removeBook(user, 'js');

    expect(user).not.toBe(UserWithoutJSBook)
    expect(user.books).not.toBe(UserWithoutJSBook.books)
    expect(UserWithoutJSBook.books).toEqual(['css', 'html', 'react'])
    expect(user.laptop).toBe(UserWithoutJSBook.laptop)
    expect(user.address).toBe(UserWithoutJSBook.address)
    expect(UserWithoutJSBook.books[2]).toBe('react')
    expect(UserWithoutJSBook.books.length).toBe(3)
})

test('add company to user experience', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Гугл'}, {id: 2, title: 'Facebook'}]
    }

    const userWithNewCompany = addNewCompanyToUser(user, 'Microsoft')
    const userWithNewAndUndatedCompany = updateCompany(userWithNewCompany, 'Гугл', 'Google') as UserWithLaptopType & WithCompaniesType


    expect(user).not.toBe(userWithNewAndUndatedCompany)
    expect(user.companies).not.toBe(userWithNewAndUndatedCompany.companies)
    expect(userWithNewAndUndatedCompany.companies).toEqual([{id: 1, title: 'Google'}, {id: 2, title: 'Facebook'}, {
        id: 3,
        title: 'Microsoft'
    }])
    expect(user.laptop).toBe(userWithNewAndUndatedCompany.laptop)
    expect(user.address).toBe(userWithNewAndUndatedCompany.address)
    expect(userWithNewAndUndatedCompany.companies[2]).toEqual({id: 3, title: 'Microsoft'})
    expect(user.companies.length).toBe(2)

})

test('update company', () => {
      let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'Facebook'}],
        'Artem': [{id: 1, title: 'Google'}]
    }

    const copy = updateCompanyTitle(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')

})