export interface LookupItem{
  id: number,
  name: string

}
 export interface Employee {
     id: string;
     displayName: string;
     functionName: string;
     departmentName: string;
     email: string;
     companyAlias: string;
     status: string;
     contracts: Contract[];
 }

 export interface EmployeeInfo
 {
    id: string;
 }

 export interface Person {
    id: string;
    name: string;
    address: Address[];
    displayName: string;
    socialName: string;
    course: string;
    schoolName: string;
    civilStateId: number;
    civilState: string;
    schoolLevelId: number;
    schoolLevel: string;
    gender: string;
    genderIdentity: string;
    firstAdmissionDate?: Date;
    lastDemissionDate?: Date;
    employee: Employee;
    birthDate: Date;
    birthCity: string;
    birthState: string;
    birthCountry: string;
    parent1Name: string;
    parent1Gender: string;
    parent2Name: string;
    parent2Gender: string;
    sexualOrientation: string;
    pictureUrl: string;
    attributes: Attributes;
    certifications:TechnicalCertifications[];
    phones: Phones[];
    emails: string[];
    bankAccounts: BankAccounts[];
    disabilities: Disability[]
    personChecked: boolean;
    addressChecked: boolean;
    contactsChecked: boolean;
    dependentsChecked: boolean;
    banksChecked: boolean;
    attachmentChecked: boolean;
    documentsChecked: boolean;
    documents: Documents[];
    dependents: Dependents[];
}

export interface Disability{
    id: string,
    description: string,
    disabilityId: number,
    scannedFileId: string
}

export interface Address{
    id: string,
    oldAddressId: string,
    address1: string,
    address2: string,
    address3?: string,
    city: string,
    countryName: string,
    state: string,
    type: number,
    zipCode: number,
}

export interface TechnicalCertifications{
    certificationId: string;
    name: string;
    companyName: string;
    number: number;
    storageId:string;
    achievementDate: Date;
}
export interface Attributes {
    bloodTypeId: number;
    skinColorId: number;
    hairColorId: number;
    eyesColorId: number;
    height: number;
    weight: number;
    shoeSize: number;
    bloodDonor: boolean;
    mannequim: string;
    physicalDeficiencyId: number;
}

export interface LookUp {
    skinColor: LookupItem[],
    bloodType: LookupItem[],
    eyesColor: LookupItem[],
    hairColor: LookupItem[],
    schoolLevel?: LookupItem[],
    demissionType : LookupItem[],
}

export interface Contract {
    id: string;
    employeeID: string;
    typeId: number;
    typeName: string;
    statusId: number | null;
    demissionTypeId: number | null;
    demissionTypeName: string;
    functionId: number;
    functionName: string;
    departmentId: number;
    departmentName: string;
    companyId: number;
    companyName: string;
    roleId: number;
    roleName: string;
    workTypeId: number;
    workTypeName: string;
    costCenterId: number;
    costCenterName: string;
    contractCompanyName: string;
    managerId: string;
    managerName: string | null;
    appointmentRequired: boolean;
    email: string;
    hourLimit: number;
    admissionDate: string;
    demissionDate: string | null;
    currentSalary: number;
    badgeId: string | null;
    experienceContract: string | null;
    salaryCategoryId: number;
    syndicate: string | null;
    phoneExtension: string | null;
    employeeTransport: string | null;
    experienceDays: number;
    experienceProlongationDays: number;
    experienceEndDate: string;
    experienceProlongationEndDate: string;
    employeeBenefits: Benefits[];
    dependentBenefits: Benefits[];
    contractChecked: boolean;
    syndicateChecked: boolean;
    employeeBenefitsChecked: boolean;
    employeeTransportChecked: boolean;
}

export interface Benefits{
    benefitsTypeId: number;
    name: string;
    kinshipId?: number;
    expiresOn: Date;
    updatedOn: Date;
    cardNumber: string;
}

export interface Contacts{
    emails: string[]
    phones: Phones[]
}

export interface Phones{
    typeId: string;
    number: string;
    contactName: string;
}

export interface LookupPhoneTypes {
   phoneTypes: LookupItem[]
}

export interface Documents {
    id: string;
    mask: string;
    expires: Date;
    name: string;
}

export interface IDepartment{
    id: number;
    name: string;
    ownerId:string;
    ownerName: string;
    isEnable: Boolean;
    updateOn: Date;
}

export interface IDepartmentRequest{
    employeeId: string;
    departmentId: number;
    effectiveDate: Date,
    reason: string;
}
export interface Function{
    id: String;
    name: String;
    isEnable: Boolean;
    updateOn: Date;
}

export interface CostCenter  {
    id: number;
    displayName: String;
    internalId: String;
    isEnable: Boolean;
}
export interface BankAccounts{
    account: string;
    agency: string;
    bankName: string;
}

export interface User{
    id: string;
    displayName: string;
    email: string;
}
export interface Dependents {
    id: string;
    fullName: string;
    birthDate: Date;
    cpf: string;
    gender: string;
    kinshipId: number;
    parent1FullName: string;
    parent1Gender: string;
    parent2FullName: string;
    parent2Gender: string;
    rg: string;
    homeAddress: Address;
    isIncludedOnIR: boolean;
}

export interface Contracts {
    contractId: string,
    employeeId: string,
    contractTypeName: string,
    functionName: string,
    admissionDate: Date,
    demissionDate: Date
}

export interface PayrollHistory {
    id: string,
    employeeName: string,
    roleName: string,
    reason: string,
    costCenterName: string,
    departmentName: string,
    jobLevel: string,
    jobProfileName: string,
    companyName: string,
    modalityName: string,
    createdOn: Date,
    historyTypeId: number,
    salary: number,
    bonus: number,
    otherPayments: number,
    totalBenefits: number,
    totalPayments: number,
    txHr: number,
    txHrEq: number,
    contractCompanyName: string,
    areaType: string,
    contractType: string
}

export interface Benefits{
    benefitsTypeId: number;
    currentValue: number;
    storageIds: string[];
    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updatedBy: string;
    cardNumber: string;
}
