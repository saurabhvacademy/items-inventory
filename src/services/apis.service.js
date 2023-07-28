import axios from 'axios'


export function getAllUnits() {
    const str =  localStorage.getItem("units");
    const units = JSON.parse(str);
    return units;
}

export function addUnit(unit) {
    const str =  localStorage.getItem("units");
    const units = JSON.parse(str);
    unit.id = units.length;
    unit.label = unit.value +' '+unit.baseUnit;
    units.push(unit);
    localStorage.removeItem("units")
    localStorage.setItem("units", JSON.stringify(units));
}

export function addItem(item) {
    const str =  localStorage.getItem("items");
    const items = JSON.parse(str);
    item.id = items.length;
    item.label = item.name +' '+item.id;
    items.push(item);
    localStorage.removeItem("items")
    let str2 = JSON.stringify(item);
    alert(str2);
    localStorage.setItem("items", JSON.stringify(items));
}


