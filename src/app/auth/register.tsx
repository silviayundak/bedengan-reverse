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

export default function RegisterScreen() {
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
            {/* Form Utama */}
            <View style={styles.card}>
              {/* Tombol Kembali */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
              </TouchableOpacity>

              {/* Header Logo & Judul */}
              <View style={styles.header}>
                <View style={styles.logo}>
                  <Ionicons name="person-add" size={28} color="#FFFFFF" />
                </View>

                <Text style={styles.title}>Buat Akun</Text>
                <Text style={styles.subtitle}>
                  Bergabung dan mulai petualanganmu.
                </Text>
              </View>

              {/* Nama Lengkap */}
              <Text style={styles.label}>Nama Lengkap</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Masukkan nama lengkap"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  style={styles.input}
                />
              </View>

              {/* Username */}
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Masukkan username"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  style={styles.input}
                  autoCapitalize="none"
                />
              </View>

              {/* Email */}
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

              {/* Nomor Telepon */}
              <Text style={styles.label}>Nomor Telepon</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Masukkan nomor telepon"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  style={styles.input}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Password */}
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

              {/* Tombol Daftar */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/auth/login")}
              >
                <Text style={styles.buttonText}>Daftar</Text>
              </TouchableOpacity>

              {/* Link Kembali ke Login */}
              <View style={styles.loginRow}>
                <Text style={styles.smallText}>Sudah memiliki akun?</Text>
                <TouchableOpacity onPress={() => router.replace("/auth/login")}>
                  <Text style={styles.loginLink}>Masuk sekarang</Text>
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
    paddingVertical: 40,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    position: "relative",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "rgba(20, 45, 33, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
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
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#FFFFFF",
  },
  button: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#193527",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 6,
  },
  smallText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 13,
  },
  loginLink: {
    color: "#A2E0BA",
    fontSize: 13,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
