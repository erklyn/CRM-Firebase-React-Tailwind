import React from 'react'
import '../App.css';
import {collection ,addDoc} from "firebase/firestore"
import {Formik , Field , Form} from "formik"

import {db} from "../firebase.config"
 
export default function CreateCustomer() {
    
        const NewCustomer = () => (
            <Formik
            initialValues = {{
                companyName : '',
                companyCity : '',
                companyCountry : '',
                companyPhNumber : '',
                companyTrailerType : '',
                meetingOverview : '',
                meetingSubject : '',
                ourRep : '',
                companyRep : '',
                companyMail : ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r,500));
                pushData(values);
                
            }}
            >
                <Form class="list-item">
                    <div class="form">
                    <div class="form-item">
                    <label htmlFor="companyName">Müşteri Ünvanı :</label>
                    <Field  id='companyName' name="companyName" placeholder="Şirket Adı"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyRep">Müşteri İlgili Kişisi :</label>
                    <Field id="companyRep" name="companyRep" placeholder="İlgili Kişi"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyPhNumber">Müşteri İletişim Bilgileri :</label>
                    <Field  id="companyPhNumber" name="companyPhNumber" placeholder="Telefon Numarası"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyMail">Mail :</label>
                    <Field  id="companyMail" name="companyMail"placeholder="Mail"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyCountry">Ülke :</label>
                    <Field id="companyCountry" name="companyCountry" placeholder="Türkiye"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyCity"> Şehir : </label>
                    <Field  id="companyCity" name="companyCity" placeholder="Konya"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="companyTrailerType">Treyler Tipi :</label>
                    <Field id="companyTrailerType" name="companyTrailerType" placeholder="Kuruyük"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="meetingSubject">Görüşme Konusu :</label>
                    <Field id="meetingSubject" name="meetingSubject" placeholder="Konu"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="meetingOverview">Görüşme :</label>
                    <Field type="textfield" id="meetingOverview" name="meetingOverview" placeholder="Kısa Özet"/>
                    </div>
                    <div class="form-item">
                    <label htmlFor="ourRep">Temsilcimiz :</label>
                    <Field id="ourRep" name="ourRep"  placeholder="Adınız"/>
                    </div>
                    <div class="form-item">
                    <button  type="submit"> Yeni Müşteri Oluştur </button>
                    </div>
                    </div>

                </Form>

            </Formik>
        );
        const pushData = async (data) => {
            await addDoc(collection(db,"customers"),data);
        };
        
          
        return (
            <div>
                <NewCustomer />
            </div>
        )
}
   

