export interface LazyList<T> {
    head: T;
    next(current: T): T;
}

export function take<T>(n: number, list: LazyList<T>): T[] {
    let temp = list.head;
    const res: T[] = [];

    for (let i = 0; i < n; i += 1) {
        res.push(temp);
        temp = list.next(temp);
    }
    return res;
}