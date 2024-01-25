export default class LeadModel {
    contactFirstName: string;
    dateCreated: Date;
    suburb: string;
    category: string;
    id: number;
    description: string;
    price: number;
    statusLeadId: number;
    contactFullName?:string;
    contactPhoneNumber?:string;
    contactEmail?:string;

    constructor(
        contactFirstName: string,
        dateCreated: Date,
        suburb: string,
        category: string,
        id: number,
        description: string,
        price: number,
        statusLeadId:number,
        contactFullName:string,
        contactPhoneNumber:string,
        contactEmail:string
    ) {
        this.contactFirstName = contactFirstName;
        this.dateCreated = dateCreated;
        this.suburb = suburb;
        this.category = category;
        this.id = id;
        this.description = description;
        this.price = price;
        this.statusLeadId = statusLeadId;
        this.contactFullName = contactFullName;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactEmail = contactEmail
    }
}

