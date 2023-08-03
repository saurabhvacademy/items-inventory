import itemModel from '../initialData/itemModel.json';

export function getItemValidationObject(item){
    itemModel.HSN = item.HSN;
    itemModel.costPrice = item.costPrice;
    itemModel.label = item.label;
    itemModel.name = item.name;
    itemModel.salePrice = item.salePrice;
    itemModel.totalBaughtCount = item.totalBaughtCount;
    itemModel.totalSoldCount = item.totalSoldCount;
    const getItemValidationObject = {isHsnValid:true,
        isCostPriceValid:true,
        isLabelValid:true,
        isNameValid:true,
        isSalePriceValid:true,
        isTotalBaughtCountValid:true,
        isTotalSoldCountValid:true
    };

    getItemValidationObject.isHsnValid = isHsnValid(itemModel.HSN);
    return getItemValidationObject;        
}

export function isHsnValid(hsn){
    if(hsn && !isNaN(hsn)){
        return true;
    }
    return false;
}
