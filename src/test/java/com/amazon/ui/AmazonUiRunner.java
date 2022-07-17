package com.amazon.ui;

import com.intuit.karate.junit5.Karate;

public class AmazonUiRunner {
    @Karate.Test
    Karate testUi() {
        return Karate.run("AmazonUi.feature").relativeTo(getClass());
    }

    @Karate.Test
    Karate LoginPageUi() {
        return Karate.run("LoginPageUi.feature").relativeTo(getClass());
    }

    @Karate.Test
    Karate AddressInformationUi() {
        return Karate.run("AddressInformationUi.feature").relativeTo(getClass());
    }
}
