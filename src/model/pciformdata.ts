/*
export class PciFormData {
    dealer: String;
    zone: String;
    year: Number;
    crop: String;
    hybrid: String;
    material: String;
    type : String ='price';
    typeChoice : String='';
    businessId:String;
    lastRequestedDate: Date;
    validateZones
  }
*/


export class PciFormData {
  dealer: String;
  zoneID: String;
  year: Number;
  specieId: String;
  acronymName: String;
  productId: String;
  priceDate: Date;
  type : String ='';
  typeChoice : String ='';
  push : String ='yes';
  partnerType : String ='EBID';
  businessId:String;
  validateZones: String = 'false';
  success :Boolean;
}
