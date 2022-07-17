# **Karate ile Web Servis Testi Örneği**

# **Runners**
## UI Runners

    @Karate.Test
    Karate testUi() {
        return Karate.run("ui/AmazonUi.feature").relativeTo(getClass());
    }

    @Karate.Test
    Karate LoginPageUi() {
        return Karate.run("ui/LoginPageUi.feature").relativeTo(getClass());
    }

    @Karate.Test
    Karate AddressInformationUi() {
        return Karate.run("ui/AddressInformationUi.feature").relativeTo(getClass());
    }

# **Steps**
 * "https://www.amazon.com.tr" adresine gidilir.
 * "Giriş Yap" butonuna tıklanır.
 * "E-posta adresi" alanına geçerli E-posta adresi girilir.
 * "Devam Et" butonuna tıklanır.
 * "Şifre" alanına geçerli bir şifre girilir.
 * "Giriş Yap" butonuna tıklanır.
 * "Tüm Kategoriler" den "Bilgisayarlar" alanı seçilir.
 * "Arama" butonuna tıklanır.
 * Sayfada bulunan "Dizüstü Bilgisayarlar" kategorisine tıklanır.
 * "Amazon Tarafından Gönderilir" seçeneğine tıklanır.
 * İlgili sayfadan Rastgele dizüstü bilgisayar seçilir.
 * "Sepete Ekle" ve "Sepete Git" butonuna tıklanır.
 * "Alışverişi Tamamla" butonuna tıklanır.
 * "Yeni adres ekle" bölümüne adres bilgileri girilir.
 * "Bu adresi kullan" butonuna tıklanır.
 * "Ödeme aracı seçin" bölümünden kayıtlı kart ile işleme devam edilir.
 * "Kartınızı doğrulayın" alanına kart numarası girilir.
 * "Kartı Doğrula" butonuna tıklanır.
 * Sayfada bulunan "Şimdi al" butonuna tıklanır.
 * "Ödeme İşlemi" sonucu beklenir.

 # Getting Started (Gereksinimler)
 Karate requires Java 8 (at least version 1.8.0_112 or greater) (Java jdk 1.8 sürümü ve üzeri.)
 https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

 **Intellij**
 https://www.jetbrains.com/idea/download/#section=windows (Maven, Gradle or Eclipse to be installed.)

 **Cucumber Plugin**
 (cucumber for java)

 **Karate Github**
 "https://github.com/intuit/karate"

 # Running in IntelliJ
 If you use IntelliJ IDEA, Cucumber support is built-in, and you can even select a single Scenario within a Feature to run at a time.
 If you are using the free Community Edition, you can easily install the "Gherkin" and "Cucumber for Java" plugins.

 # Maven Dependency
 'karate-apache' should be add as a dependency on pom.xml so it will be installed automatically.
 ```
  <properties>
         <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
         <java.version>1.8</java.version>
         <maven.compiler.version>3.8.1</maven.compiler.version>
         <maven.surefire.version>2.22.2</maven.surefire.version>
         <karate.version>1.2.0</karate.version>
     </properties>

     <dependencies>
         <dependency>
             <groupId>com.intuit.karate</groupId>
             <artifactId>karate-junit5</artifactId>
             <version>${karate.version}</version>
             <scope>test</scope>
         </dependency>
         <dependency>
             <groupId>com.intuit.karate</groupId>
             <artifactId>karate-ui</artifactId>
             <version>0.9.5.RC3</version>
         </dependency>
     </dependencies>

     <build>
         <testResources>
             <testResource>
                 <directory>src/test/java</directory>
                 <excludes>
                     <exclude>**/*.java</exclude>
                 </excludes>
             </testResource>
         </testResources>
         <plugins>
             <plugin>
                 <groupId>org.apache.maven.plugins</groupId>
                 <artifactId>maven-compiler-plugin</artifactId>
                 <version>${maven.compiler.version}</version>
                 <configuration>
                     <encoding>UTF-8</encoding>
                     <source>${java.version}</source>
                     <target>${java.version}</target>
                     <compilerArgument>-Werror</compilerArgument>
                 </configuration>
             </plugin>
             <plugin>
                 <groupId>org.apache.maven.plugins</groupId>
                 <artifactId>maven-surefire-plugin</artifactId>
                 <version>${maven.surefire.version}</version>
                 <configuration>
                     <argLine>-Dfile.encoding=UTF-8</argLine>
                 </configuration>
             </plugin>
         </plugins>
     </build>

 ```
