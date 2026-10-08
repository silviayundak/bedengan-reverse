import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient
      colors={["#2D4A3E", "#426050", "#2E473B"]}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            {/* Card Form Utama */}
            <View style={styles.card}>
              {/* Header Logo & Judul */}
              <View style={styles.logoContainer}>
                <View style={styles.logo}>
                  <Ionicons name="tent" size={32} color="#FFFFFF" />
                </View>

                <Text style={styles.brand}>Bedengan Reserve</Text>
                <Text style={styles.subtitle}>Admin Management System</Text>
              </View>

              {/* Form Email */}
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Masukkan email"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Form Password */}
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Masukkan password"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  secureTextEntry={!showPassword}
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                </TouchableOpacity>
              </View>

              {/* Tombol Masuk */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => router.replace("/(tabs)")}
              >
                <Text style={styles.loginText}>Masuk</Text>
              </TouchableOpacity>

              {/* Opsi Register / Daftar */}
              <View style={styles.registerRow}>
                <Text style={styles.registerText}>Belum memiliki akun?</Text>
                <TouchableOpacity onPress={() => router.push("/auth/register")}>
                  <Text style={styles.registerLink}>Daftar sekarang</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "rgba(20, 45, 33, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.7)",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  inputContainer: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#FFFFFF",
  },
  loginButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#193527",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 6,
  },
  registerText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 13,
  },
  registerLink: {
    color: "#A2E0BA",
    fontSize: 13,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
