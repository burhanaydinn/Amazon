package com.amazon;

import com.intuit.karate.junit5.Karate;

public class AmazonRunner {

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
}
