import { capitalize, arrayToList, dateMonthYear } from '@/filters';

describe("filters check", () => {

    it('is checking capitalize', () => {
        let res = capitalize('harsha')
        expect(res).toBe('Harsha')
    })

    it('is checking capitalize with empty value', () => {
        let res = capitalize('')
        expect(res).toBe('')
    })

    it('is checking dateMonthYear', () => {
        let res = dateMonthYear('08/22/2020')
        expect(res).toBe('Aug, 2020')
    })

    it('is checking dateMonthYear with empty value', () => {
        let res = dateMonthYear('')
        expect(res).toBe('')
    })

    it('is checking arrayToList', () => {
        let res = arrayToList(['a', 'b', 'c'])
        expect(res).toBe('a, b, c')
    })

    it('is checking arrayToList with empty value', () => {
        let res = arrayToList('')
        expect(res).toBe('')
    })

})
