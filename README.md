# Diyabet Tahmin Web Uygulaması

## Genel Bakış
Bu proje, **React**, **Flask** ve **Spring Boot** kullanılarak geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların diyabetle ilgili verilerini girmelerini sağlar. Girilen veriler, Flask ile oluşturulan bir makine öğrenmesi modeli tarafından işlenir ve sonuçlar kullanıcı arayüzünde görüntülenir. Ayrıca, girilen veriler ve tahmin sonuçları, **Spring Boot** ile yönetilen bir veritabanında saklanır.

## Özellikler
- **Veri Girişi:** Kullanıcılar, React ön yüzü üzerinden diyabetle ilgili bilgilerini interaktif bir form aracılığıyla girebilirler.
- **Makine Öğrenmesi Tahmini:** Girilen veriler, Flask backend’ine gönderilir ve burada önceden eğitilmiş bir makine öğrenmesi modeli ile işlenir. Model, kullanıcının diyabet riskini tahmin eder.
- **Sonuçların Gösterilmesi:** Tahmin sonucu ve kullanıcının girdiği veriler, kullanıcıya gösterilir.
- **Veri Saklama:** Tüm kullanıcı verileri ve sonuçlar, Spring Boot backend’inde bir veritabanına kaydedilir ve gelecekteki referanslar ve analizler için saklanır.

## Teknoloji Yığını
- **Frontend:** React.js
- **Backend:** Flask (makine öğrenmesi modeli için) ve Spring Boot (veri saklama ve API yönetimi için)
- **Veritabanı:** MySQL (Spring Boot ile yönetilen)

 ## Ana Sayfası
 ![image](https://github.com/user-attachments/assets/3758e4e7-76fc-435b-bdd9-cf9e13c355a4)
 
  ## Hastalıkla Ilgili Tahminlerin Yapıldığı Sayfası
  ![image](https://github.com/user-attachments/assets/033ae319-58c8-4237-855b-29d4761fa7f1)

   ## Hasta Listesi Sayfası
   ![image](https://github.com/user-attachments/assets/7a9bf162-0c8c-47b6-983a-a8392bfde003)

   ## Kullanıcı Kayıt Sayfası
   ![image](https://github.com/user-attachments/assets/31c74a1e-ff46-47a4-8a5a-48ce8983d0cd) 

   ## Kullanıcı Giriş Sayfası
   ![image](https://github.com/user-attachments/assets/4ae7e91e-d21d-416e-aead-32e73be25ba6)




