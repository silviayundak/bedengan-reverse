import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      {/* =====================================================
          STATUS BAR
      ===================================================== */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* =====================================================
          BACKGROUND UTAMA

          File:
          assets/images/bedengan-login-bg.jpeg

          Posisi:
          src/app/auth/register.tsx
      ===================================================== */}
      <ImageBackground
        source={require("../../../assets/images/bedengan-login-bg.jpeg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* =================================================
            OVERLAY BACKGROUND
        ================================================= */}
        <LinearGradient
          colors={[
            "rgba(14, 48, 35, 0.25)",
            "rgba(20, 65, 47, 0.38)",
            "rgba(13, 47, 34, 0.68)",
            "rgba(11, 42, 31, 0.92)",
          ]}
          locations={[0, 0.35, 0.72, 1]}
          style={styles.overlay}
        />

        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {/* =================================================
                  TOMBOL KEMBALI
              ================================================= */}
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
              </TouchableOpacity>

              {/* =================================================
                  HEADER
              ================================================= */}
              <View style={styles.header}>
                {/* Logo */}
                <View style={styles.logoWrapper}>
                  <LinearGradient
                    colors={["#FFFFFF", "#E7F2EB"]}
                    style={styles.logoCircle}
                  >
                    <Ionicons
                      name="person-add-outline"
                      size={34}
                      color="#245A43"
                    />
                  </LinearGradient>
                </View>

                {/* Judul */}
                <Text style={styles.brand}>Bedengan</Text>

                <Text style={styles.brandReserve}>Reserve</Text>

                <View style={styles.brandLine} />

                <Text style={styles.tagline}>
                  Bergabung dan mulai petualanganmu.
                </Text>

                <Text style={styles.tagline}>
                  Nikmati pengalaman berkemah bersama kami.
                </Text>
              </View>

              {/* =================================================
                  JUDUL REGISTER
              ================================================= */}
              <View style={styles.welcomeSection}>
                <Text style={styles.welcomeTitle}>Buat Akun</Text>

                <Text style={styles.welcomeSubtitle}>
                  Daftar untuk memulai petualanganmu.
                </Text>
              </View>

              {/* =================================================
                  REGISTER CARD
              ================================================= */}
              <View style={styles.card}>
                {/* =================================================
                    NAMA LENGKAP
                ================================================= */}
                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Nama Lengkap</Text>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="person-outline"
                      size={21}
                      color="#326A52"
                      style={styles.inputIcon}
                    />

                    <TextInput
                      value={nama}
                      onChangeText={setNama}
                      placeholder="Masukkan nama lengkap"
                      placeholderTextColor="#9BAAA3"
                      style={styles.input}
                      autoCapitalize="words"
                      autoCorrect={false}
                    />
                  </View>
                </View>

                {/* =================================================
                    EMAIL
                ================================================= */}
                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Email</Text>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="mail-outline"
                      size={21}
                      color="#326A52"
                      style={styles.inputIcon}
                    />

                    <TextInput
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Masukkan email kamu"
                      placeholderTextColor="#9BAAA3"
                      style={styles.input}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                </View>

                {/* =================================================
                    NOMOR TELEPON
                ================================================= */}
                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Nomor Telepon</Text>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="call-outline"
                      size={21}
                      color="#326A52"
                      style={styles.inputIcon}
                    />

                    <TextInput
                      value={telepon}
                      onChangeText={setTelepon}
                      placeholder="Masukkan nomor telepon"
                      placeholderTextColor="#9BAAA3"
                      style={styles.input}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                {/* =================================================
                    PASSWORD
                ================================================= */}
                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Password</Text>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={21}
                      color="#326A52"
                      style={styles.inputIcon}
                    />

                    <TextInput
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Masukkan password"
                      placeholderTextColor="#9BAAA3"
                      style={styles.input}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />

                    {/* Tampilkan / sembunyikan password */}
                    <TouchableOpacity
                      style={styles.eyeButton}
                      activeOpacity={0.7}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={22}
                        color="#6E8178"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* =================================================
                    TOMBOL DAFTAR
                ================================================= */}
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.registerButton}
                  onPress={() => router.replace("/auth/login")}
                >
                  <LinearGradient
                    colors={["#2D7053", "#1C553E"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.registerGradient}
                  >
                    <Ionicons
                      name="person-add-outline"
                      size={21}
                      color="#FFFFFF"
                    />

                    <Text style={styles.registerButtonText}>Daftar</Text>

                    <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
                  </LinearGradient>
                </TouchableOpacity>

                {/* =================================================
                    LINK LOGIN
                ================================================= */}
                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Sudah memiliki akun?</Text>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.replace("/auth/login")}
                  >
                    <Text style={styles.loginLink}>Masuk sekarang</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* =================================================
                  FOOTER
              ================================================= */}
              <View style={styles.footer}>
                <View style={styles.footerIcon}>
                  <Ionicons name="leaf-outline" size={15} color="#DCEDE3" />
                </View>

                <Text style={styles.footerText}>
                  Bedengan Reserve • Smart Camping
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({
  /* ===========================================================
     SCREEN
  =========================================================== */

  screen: {
    flex: 1,
    backgroundColor: "#173D2D",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  safeArea: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: Platform.OS === "android" ? 30 : 18,
    paddingBottom: 30,
  },

  /* ===========================================================
     BACK BUTTON
  =========================================================== */

  backButton: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: "rgba(20, 45, 34, 0.55)",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 18,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  /* ===========================================================
     HEADER
  =========================================================== */

  header: {
    alignItems: "center",
    marginBottom: 22,
  },

  logoWrapper: {
    marginBottom: 9,
  },

  logoCircle: {
    width: 66,
    height: 66,

    borderRadius: 33,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 7,
  },

  brand: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: 0.5,
    lineHeight: 30,
  },

  brandReserve: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "400",
    letterSpacing: 5,
    marginTop: -1,
  },

  brandLine: {
    width: 42,
    height: 2,

    backgroundColor: "#D8E9DE",

    marginTop: 8,
    marginBottom: 8,

    borderRadius: 2,
  },

  tagline: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 11.5,
    lineHeight: 18,
    textAlign: "center",
  },

  /* ===========================================================
     WELCOME
  =========================================================== */

  welcomeSection: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "800",
    lineHeight: 36,
    letterSpacing: -0.5,
  },

  welcomeSubtitle: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 14,
    marginTop: 5,
    lineHeight: 21,
  },

  /* ===========================================================
     CARD
  =========================================================== */

  card: {
    width: "100%",

    backgroundColor: "rgba(250, 253, 250, 0.97)",

    borderRadius: 27,

    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 23,

    shadowColor: "#071E14",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 12,
  },

  /* ===========================================================
     FORM FIELD
  =========================================================== */

  fieldGroup: {
    marginBottom: 14,
  },

  label: {
    color: "#214F3C",
    fontSize: 14,
    fontWeight: "700",

    marginBottom: 7,
    marginLeft: 3,
  },

  inputWrapper: {
    height: 53,

    borderRadius: 16,

    borderWidth: 1.2,
    borderColor: "#CFDDD5",

    backgroundColor: "#F9FBF9",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 14,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: "100%",

    color: "#244F3E",

    fontSize: 14,
    fontWeight: "500",
  },

  eyeButton: {
    width: 35,
    height: 45,

    alignItems: "center",
    justifyContent: "center",
  },

  /* ===========================================================
     REGISTER BUTTON
  =========================================================== */

  registerButton: {
    width: "100%",
    height: 55,

    borderRadius: 28,

    overflow: "hidden",

    marginTop: 7,

    shadowColor: "#174C38",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 6,
  },

  registerGradient: {
    flex: 1,

    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    gap: 10,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.2,
  },

  /* ===========================================================
     LOGIN LINK
  =========================================================== */

  loginContainer: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,

    flexWrap: "wrap",
  },

  loginText: {
    color: "#75877F",
    fontSize: 13,
  },

  loginLink: {
    color: "#246047",
    fontSize: 13,
    fontWeight: "800",

    marginLeft: 5,

    textDecorationLine: "underline",
  },

  /* ===========================================================
     FOOTER
  =========================================================== */

  footer: {
    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,

    opacity: 0.9,
  },

  footerIcon: {
    width: 28,
    height: 28,

    borderRadius: 14,

    backgroundColor: "rgba(255,255,255,0.16)",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 5,
  },

  footerText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 10,
    letterSpacing: 0.2,
  },
});
