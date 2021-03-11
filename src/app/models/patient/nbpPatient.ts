export class NbpPatient {
    public patientId: number;
    public patientCode: number;
    public patientName: string;
    public patientLassName: string;
    public patientBirthday: string;
    public patientAge: number;
    public patientSexe: string;
    public patientAddress:string
    public patientPostcode: number;
    public patientInfoSuppl: string;
    public patientEmail: string;
    public patientPhoneNumber: number;
    public patientFixNumber: number;
    public patientDiseases: string;

  
    constructor(
     patientId: number,
     patientCode: number,
     patientName: string,
     patientLassName: string,
     patientBirthday: string,
     patientAge: number,
     patientSexe: string,
     patientAddress:string,
     patientPostcode: number,
     patientInfoSuppl: string,
     patientEmail: string,
     patientPhoneNumber: number,
     patientFixNumber: number,
     patientDiseases: string,
    ) {}
  }
