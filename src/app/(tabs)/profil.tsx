import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfilScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerCategory}>AKUN SAYA</Text>
          <Text style={styles.headerTitle}>Profile</Text>
          <Text style={styles.headerSubtitle}>
            Kelola informasi pribadi dan keamanan akun Bedengan Reserve kamu.
          </Text>
        </View>

        {/* Outer Layout / Layout Responsif */}
        <View style={styles.contentGrid}>
          {/* SISI KIRI: Informas Pribadi */}
          <View style={styles.leftColumn}>
            <View style={styles.mainProfileCard}>
              {/* Banner Top Profile */}
              <View style={styles.profileBanner}>
                <View style={styles.avatarCircle}>
                  <Ionicons name="person" size={24} color="#344F41" />
                </View>
                <View style={styles.profileMeta}>
                  <Text style={styles.userName}>lisa</Text>
                  <Text style={styles.userEmail}>lisa@gmail.com</Text>
                  <View style={styles.roleBadge}>
                    <Ionicons
                      name="shield-checkmark"
                      size={12}
                      color="#344F41"
                    />
                    <Text style={styles.roleBadgeText}>Pengguna</Text>
                  </View>
                </View>
              </View>

              {/* Detail Informasi Pribadi */}
              <View style={styles.infoSection}>
                <View style={styles.infoSectionHeader}>
                  <View>
                    <Text style={styles.infoTitle}>Informasi Pribadi</Text>
                    <Text style={styles.infoSubtitle}>
                      Informasi yang digunakan pada akun kamu.
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
                    <Ionicons name="create-outline" size={14} color="#344F41" />
                    <Text style={styles.editBtnText}>Edit Profile</Text>
                  </TouchableOpacity>
                </View>

                {/* Form Field Style Cards */}
                <View style={styles.fieldGrid}>
                  {/* Nama Lengkap */}
                  <View style={styles.fieldBox}>
                    <View style={styles.fieldIconBox}>
                      <Ionicons
                        name="person-outline"
                        size={18}
                        color="#344F41"
                      />
                    </View>
                    <View style={styles.fieldTextContainer}>
                      <Text style={styles.fieldLabel}>Nama Lengkap</Text>
                      <Text style={styles.fieldValue}>lisa</Text>
                    </View>
                  </View>

                  {/* Email */}
                  <View style={styles.fieldBox}>
                    <View style={styles.fieldIconBox}>
                      <Ionicons name="mail-outline" size={18} color="#344F41" />
                    </View>
                    <View style={styles.fieldTextContainer}>
                      <Text style={styles.fieldLabel}>Email</Text>
                      <Text style={styles.fieldValue}>lisa@gmail.com</Text>
                    </View>
                  </View>

                  {/* No. HP */}
                  <View style={[styles.fieldBox, { width: "100%" }]}>
                    <View style={styles.fieldIconBox}>
                      <Ionicons name="call-outline" size={18} color="#344F41" />
                    </View>
                    <View style={styles.fieldTextContainer}>
                      <Text style={styles.fieldLabel}>No. HP</Text>
                      <Text style={styles.fieldValue}>08978767678</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* SISI KANAN: Keamanan & Logout */}
          <View style={styles.rightColumn}>
            {/* Keamanan Akun */}
            <View style={styles.sideCard}>
              <View style={styles.sideCardHeader}>
                <View style={styles.smallIconCircle}>
                  <Ionicons name="lock-closed" size={14} color="#344F41" />
                </View>
              </View>
              <Text style={styles.sideCardTitle}>Keamanan Akun</Text>
              <Text style={styles.sideCardDesc}>
                Jaga keamanan akun dengan menggunakan password yang kuat.
              </Text>

              <TouchableOpacity style={styles.outlineBtn} activeOpacity={0.8}>
                <Ionicons
                  name="lock-closed-outline"
                  size={14}
                  color="#142E23"
                />
                <Text style={styles.outlineBtnText}>Ganti Password</Text>
              </TouchableOpacity>
            </View>

            {/* Keluar dari Akun */}
            <View style={[styles.sideCard, styles.logoutCard]}>
              <Text style={styles.logoutTitle}>Keluar dari Akun</Text>
              <Text style={styles.logoutDesc}>
                Akhiri sesi akun Bedengan Reserve kamu di perangkat ini.
              </Text>

              <TouchableOpacity
                style={styles.logoutOutlineBtn}
                activeOpacity={0.8}
                onPress={() => router.replace("/auth/login")}
              >
                <Ionicons name="log-out-outline" size={14} color="#D9534F" />
                <Text style={styles.logoutOutlineBtnText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F7F5",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },

  // Header
  headerSection: {
    marginBottom: 20,
  },
  headerCategory: {
    fontSize: 10,
    fontWeight: "800",
    color: "#6B7C73",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#142E23",
    marginTop: 2,
  },
  headerSubtitle: {
    fontSize: 11,
    color: "#7A8981",
    marginTop: 3,
  },

  // Layout Grid
  contentGrid: {
    gap: 16,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    gap: 14,
  },

  // Main Card Sisi Kiri
  mainProfileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E3ECE6",
    elevation: 1,
  },
  profileBanner: {
    backgroundColor: "#DFEADF",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#CBE0D1",
    justifyContent: "center",
    alignItems: "center",
  },
  profileMeta: {
    gap: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#142E23",
  },
  userEmail: {
    fontSize: 11,
    color: "#5B7065",
  },
  roleBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#C3DBC9",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginTop: 4,
  },
  roleBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#284234",
  },

  // Info Section
  infoSection: {
    padding: 20,
  },
  infoSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#142E23",
  },
  infoSubtitle: {
    fontSize: 10.5,
    color: "#84958C",
    marginTop: 2,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EFE5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  editBtnText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#284234",
  },

  // Field Box Grid
  fieldGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  fieldBox: {
    flex: 1,
    minWidth: 150,
    backgroundColor: "#F9FAF9",
    borderWidth: 1,
    borderColor: "#E5ECE7",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  fieldIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#E2EFE5",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldTextContainer: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 9.5,
    color: "#84958C",
  },
  fieldValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#142E23",
    marginTop: 1,
  },

  // Right Side Cards
  sideCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E3ECE6",
  },
  sideCardHeader: {
    marginBottom: 8,
  },
  smallIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#E2EFE5",
    justifyContent: "center",
    alignItems: "center",
  },
  sideCardTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#142E23",
  },
  sideCardDesc: {
    fontSize: 10,
    color: "#84958C",
    marginTop: 2,
    marginBottom: 14,
    lineHeight: 14,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#D1DDD5",
    borderRadius: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
  },
  outlineBtnText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#142E23",
  },

  // Logout Card
  logoutCard: {
    backgroundColor: "#FCF2F2",
    borderColor: "#F7D8D8",
  },
  logoutTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#991B1B",
  },
  logoutDesc: {
    fontSize: 10,
    color: "#B91C1C",
    marginTop: 2,
    marginBottom: 14,
    lineHeight: 14,
  },
  logoutOutlineBtn: {
    borderWidth: 1,
    borderColor: "#FCA5A5",
    borderRadius: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
  },
  logoutOutlineBtnText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#D9534F",
  },
});
