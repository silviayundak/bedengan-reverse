import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

/* =========================================================
   INTERFACE LOCATION CARD
========================================================= */

interface LocationCardProps {
  title: string;
  description: string;
  areaInfo: string;
  capacity: string;
  price: string;
  status: "Tersedia" | "Penuh";
  imageUri: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

/* =========================================================
   DATA LOKASI
   HANYA 2 LOKASI
========================================================= */

const LOCATION_DATA: Omit<LocationCardProps, "onPress">[] = [
  {
    title: "Area Sungai",
    description:
      "Area camping sejuk di tepi aliran sungai jernih dengan suasana alam yang tenang.",
    areaInfo: "Area camping dekat sungai",
    capacity: "Kapasitas 20 orang",
    price: "Rp 25.000",
    status: "Tersedia",
    icon: "water-outline",
    imageUri:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Bedengan Camping Ground",
    description:
      "Area camping utama dengan suasana hijau yang cocok untuk keluarga dan komunitas.",
    areaInfo: "Area camping utama",
    capacity: "Kapasitas 50 orang",
    price: "Rp 25.000",
    status: "Tersedia",
    icon: "leaf-outline",
    imageUri:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=85",
  },
];

/* =========================================================
   MAIN SCREEN
========================================================= */

export default function LokasiScreen() {
  const [searchText, setSearchText] = useState("");

  /* =======================================================
     FILTER LOKASI
  ======================================================= */

  const filteredLocations = LOCATION_DATA.filter((item) => {
    const search = searchText.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.areaInfo.toLowerCase().includes(search)
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =====================================================
            TOP HERO
        ===================================================== */}

        <View style={styles.heroContainer}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
            }}
            style={styles.heroBackground}
            imageStyle={styles.heroImage}
          >
            <LinearGradient
              colors={[
                "rgba(11, 52, 37, 0.12)",
                "rgba(11, 52, 37, 0.48)",
                "rgba(7, 36, 26, 0.92)",
              ]}
              style={styles.heroOverlay}
            >
              {/* =================================================
                  HEADER
              ================================================= */}

              <View style={styles.header}>
                {/* LOGO */}
                <View style={styles.logoContainer}>
                  <View style={styles.logoIcon}>
                    <Ionicons name="triangle" size={18} color="#FFFFFF" />
                  </View>

                  <View>
                    <Text style={styles.logoTitle}>Bedengan</Text>

                    <Text style={styles.logoSubtitle}>RESERVE</Text>
                  </View>
                </View>

                {/* HEADER ACTION */}
                <View style={styles.headerActions}>
                  <TouchableOpacity
                    style={styles.headerCircle}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={19}
                      color="#FFFFFF"
                    />

                    <View style={styles.notificationDot} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.profileCircle}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="person-outline" size={17} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* =================================================
                  HERO CONTENT
              ================================================= */}

              <View style={styles.heroContent}>
                <Text style={styles.heroSmallText}>Jelajahi Lokasi</Text>

                <Text style={styles.heroTitle}>Lokasi Bedengan</Text>

                <Text style={styles.heroDescription}>
                  Pilih lokasi camping favoritmu dan nikmati
                  {"\n"}
                  pengalaman berkemah di tengah alam.
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* =====================================================
            RESERVATION STEPPER
        ===================================================== */}

        <View style={styles.stepperWrapper}>
          <View style={styles.stepperCard}>
            {/* HEADER STEPPER */}

            <View style={styles.stepperHeader}>
              <View style={styles.stepperIcon}>
                <Ionicons name="calendar-outline" size={21} color="#FFFFFF" />
              </View>

              <View style={styles.stepperHeaderText}>
                <Text style={styles.stepperTitle}>Reservasi Camping</Text>

                <Text style={styles.stepperSubtitle}>
                  Pesan tempat camping favoritmu dengan mudah.
                </Text>
              </View>
            </View>

            {/* STEPS */}

            <View style={styles.stepsContainer}>
              {/* STEP 1 */}

              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, styles.stepCircleActive]}>
                  <Ionicons name="location" size={15} color="#FFFFFF" />
                </View>

                <Text style={[styles.stepText, styles.stepTextActive]}>
                  Pilih Lokasi
                </Text>
              </View>

              {/* LINE */}

              <View style={styles.stepLineActive} />

              {/* STEP 2 */}

              <View style={styles.stepItem}>
                <View style={styles.stepCircle}>
                  <Text style={styles.stepNumber}>2</Text>
                </View>

                <Text style={styles.stepText}>Tanggal & Jumlah</Text>
              </View>

              {/* LINE */}

              <View style={styles.stepLine} />

              {/* STEP 3 */}

              <View style={styles.stepItem}>
                <View style={styles.stepCircle}>
                  <Text style={styles.stepNumber}>3</Text>
                </View>

                <Text style={styles.stepText}>Konfirmasi</Text>
              </View>
            </View>
          </View>
        </View>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Pilih Lokasi Favoritmu</Text>

          <Text style={styles.introDescription}>
            Temukan tempat terbaik untuk menikmati suasana alam Bedengan bersama
            keluarga, teman, atau komunitas.
          </Text>
        </View>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={19} color="#71857A" />

          <TextInput
            style={styles.searchInput}
            placeholder="Cari nama lokasi..."
            placeholderTextColor="#94A39C"
            value={searchText}
            onChangeText={setSearchText}
          />

          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => setSearchText("")}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle" size={19} color="#87978F" />
            </TouchableOpacity>
          ) : (
            <Ionicons name="options-outline" size={19} color="#527060" />
          )}
        </View>

        {/* =====================================================
            LOCATION SECTION HEADER
        ===================================================== */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Lokasi Bedengan</Text>

            <Text style={styles.sectionSubtitle}>
              Tersedia 2 lokasi camping
            </Text>
          </View>

          <View style={styles.locationCount}>
            <Ionicons name="location" size={13} color="#356B54" />

            <Text style={styles.locationCountText}>2 Lokasi</Text>
          </View>
        </View>

        {/* =====================================================
            LOCATION CARDS
        ===================================================== */}

        <View style={styles.locationList}>
          {filteredLocations.map((item, index) => (
            <LocationCardItem
              key={index}
              title={item.title}
              description={item.description}
              areaInfo={item.areaInfo}
              capacity={item.capacity}
              price={item.price}
              status={item.status}
              imageUri={item.imageUri}
              icon={item.icon}
              onPress={() => {
                // Navigasi ke detail lokasi / step berikutnya
              }}
            />
          ))}
        </View>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {filteredLocations.length === 0 && (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons name="search-outline" size={28} color="#789087" />
            </View>

            <Text style={styles.emptyTitle}>Lokasi tidak ditemukan</Text>

            <Text style={styles.emptyDescription}>
              Coba gunakan kata pencarian yang berbeda.
            </Text>
          </View>
        )}

        {/* =====================================================
            INFORMATION BANNER
        ===================================================== */}

        <View style={styles.infoBanner}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="information-circle-outline"
              size={23}
              color="#356B54"
            />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Sebelum Reservasi</Text>

            <Text style={styles.infoDescription}>
              Pastikan memilih lokasi, tanggal, dan jumlah pengunjung sesuai
              kebutuhanmu.
            </Text>
          </View>
        </View>

        {/* =====================================================
            FACILITIES
        ===================================================== */}

        <View style={styles.facilitySection}>
          <View style={styles.facilityHeader}>
            <Text style={styles.facilityTitle}>Fasilitas</Text>

            <Text style={styles.facilitySubtitle}>
              Nikmati fasilitas yang tersedia
            </Text>
          </View>

          <View style={styles.facilityGrid}>
            {/* FACILITY 1 */}

            <View style={styles.facilityCard}>
              <View style={styles.facilityIcon}>
                <Ionicons name="leaf-outline" size={21} color="#356B54" />
              </View>

              <Text style={styles.facilityCardTitle}>Alam Asri</Text>

              <Text style={styles.facilityCardText}>
                Udara sejuk dan pemandangan indah
              </Text>
            </View>

            {/* FACILITY 2 */}

            <View style={styles.facilityCard}>
              <View style={styles.facilityIcon}>
                <Ionicons name="water-outline" size={21} color="#356B54" />
              </View>

              <Text style={styles.facilityCardTitle}>Area Sungai</Text>

              <Text style={styles.facilityCardText}>
                Suasana sungai yang tenang
              </Text>
            </View>

            {/* FACILITY 3 */}

            <View style={styles.facilityCard}>
              <View style={styles.facilityIcon}>
                <Ionicons name="home-outline" size={21} color="#356B54" />
              </View>

              <Text style={styles.facilityCardTitle}>Fasilitas Lengkap</Text>

              <Text style={styles.facilityCardText}>
                Toilet, mushola dan warung
              </Text>
            </View>

            {/* FACILITY 4 */}

            <View style={styles.facilityCard}>
              <View style={styles.facilityIcon}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={21}
                  color="#356B54"
                />
              </View>

              <Text style={styles.facilityCardTitle}>Keamanan</Text>

              <Text style={styles.facilityCardText}>
                Tim keamanan selalu siaga
              </Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            CTA
        ===================================================== */}

        <View style={styles.ctaContainer}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1200&q=85",
            }}
            style={styles.ctaBackground}
            imageStyle={styles.ctaImage}
          >
            <LinearGradient
              colors={["rgba(13, 54, 39, 0.38)", "rgba(7, 37, 27, 0.93)"]}
              style={styles.ctaOverlay}
            >
              <View style={styles.ctaIcon}>
                <Ionicons name="leaf" size={20} color="#FFFFFF" />
              </View>

              <Text style={styles.ctaTitle}>Siap Berkemah?</Text>

              <Text style={styles.ctaDescription}>
                Pilih lokasi favoritmu dan mulai petualangan
                {"\n"}
                bersama Bedengan Reserve.
              </Text>

              <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
                <Text style={styles.ctaButtonText}>Lakukan Reservasi</Text>

                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* =====================================================
            FOOTER SPACE
        ===================================================== */}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

/* =============================================================
   LOCATION CARD COMPONENT
============================================================= */

function LocationCardItem({
  title,
  description,
  areaInfo,
  capacity,
  price,
  status,
  imageUri,
  icon,
  onPress,
}: LocationCardProps) {
  const isAvailable = status === "Tersedia";

  return (
    <TouchableOpacity
      style={styles.locationCard}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <View style={styles.locationImageContainer}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.locationImage}
        />

        {/* IMAGE OVERLAY */}

        <LinearGradient
          colors={["transparent", "rgba(5, 30, 21, 0.55)"]}
          style={styles.imageOverlay}
        />

        {/* STATUS */}

        <View
          style={[styles.statusBadge, !isAvailable && styles.statusBadgeFull]}
        >
          <View
            style={[styles.statusDot, !isAvailable && styles.statusDotFull]}
          />

          <Text
            style={[styles.statusText, !isAvailable && styles.statusTextFull]}
          >
            {status}
          </Text>
        </View>

        {/* FAVORITE */}

        <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
          <Ionicons name="heart-outline" size={17} color="#FFFFFF" />
        </TouchableOpacity>

        {/* LOCATION ICON */}

        <View style={styles.imageLocationBadge}>
          <Ionicons name={icon} size={12} color="#FFFFFF" />

          <Text style={styles.imageLocationText}>Camping Ground</Text>
        </View>
      </View>

      {/* =====================================================
          CARD CONTENT
      ===================================================== */}

      <View style={styles.locationCardContent}>
        {/* TITLE */}

        <Text style={styles.locationCardTitle}>{title}</Text>

        {/* DESCRIPTION */}

        <Text style={styles.locationDescription} numberOfLines={2}>
          {description}
        </Text>

        {/* INFO */}

        <View style={styles.locationInfoRow}>
          <View style={styles.infoSmallIcon}>
            <Ionicons name={icon} size={13} color="#356B54" />
          </View>

          <Text style={styles.locationInfoText} numberOfLines={1}>
            {areaInfo}
          </Text>
        </View>

        <View style={styles.locationInfoRow}>
          <View style={styles.infoSmallIcon}>
            <Ionicons name="people-outline" size={13} color="#356B54" />
          </View>

          <Text style={styles.locationInfoText}>{capacity}</Text>
        </View>

        {/* DIVIDER */}

        <View style={styles.cardDivider} />

        {/* FOOTER */}

        <View style={styles.locationCardFooter}>
          <View>
            <Text style={styles.priceLabel}>Mulai dari</Text>

            <View style={styles.priceRow}>
              <Text style={styles.priceText}>{price}</Text>

              <Text style={styles.priceUnit}>/ malam</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.cardArrowButton} activeOpacity={0.8}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({
  // ===========================================================
  // CONTAINER
  // ===========================================================

  container: {
    flex: 1,
    backgroundColor: "#F2F7F3",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  // ===========================================================
  // HERO
  // ===========================================================

  heroContainer: {
    width: "100%",
    height: 335,
    overflow: "hidden",
  },

  heroBackground: {
    width: "100%",
    height: "100%",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 42,
    justifyContent: "space-between",
  },

  // ===========================================================
  // HEADER
  // ===========================================================

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.75)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  logoTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  logoSubtitle: {
    color: "#DCEBE2",
    fontSize: 7,
    letterSpacing: 1.3,
    marginTop: 1,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E75C49",
  },

  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#285A44",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  // ===========================================================
  // HERO CONTENT
  // ===========================================================

  heroContent: {
    marginBottom: 3,
  },

  heroSmallText: {
    color: "#B9D9C7",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  heroDescription: {
    color: "#EDF5F0",
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 7,
  },

  // ===========================================================
  // STEPPER
  // ===========================================================

  stepperWrapper: {
    paddingHorizontal: 16,
    marginTop: -36,
    zIndex: 10,
  },

  stepperCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 14,
    shadowColor: "#173C2B",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 6,
  },

  stepperHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepperIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#285E48",
    justifyContent: "center",
    alignItems: "center",
  },

  stepperHeaderText: {
    flex: 1,
    marginLeft: 11,
  },

  stepperTitle: {
    color: "#193B2D",
    fontSize: 15,
    fontWeight: "900",
  },

  stepperSubtitle: {
    color: "#7C8E85",
    fontSize: 9.5,
    lineHeight: 14,
    marginTop: 2,
  },

  stepsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: "#EDF2EE",
  },

  stepItem: {
    flex: 1,
    alignItems: "center",
  },

  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E7EFEA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  stepCircleActive: {
    backgroundColor: "#285E48",
  },

  stepNumber: {
    color: "#71857A",
    fontSize: 11,
    fontWeight: "800",
  },

  stepText: {
    color: "#85958D",
    fontSize: 8.5,
    fontWeight: "600",
    textAlign: "center",
  },

  stepTextActive: {
    color: "#285E48",
    fontWeight: "800",
  },

  stepLine: {
    width: 28,
    height: 1,
    backgroundColor: "#DDE7E1",
    marginTop: 15,
  },

  stepLineActive: {
    width: 28,
    height: 1,
    backgroundColor: "#83AA96",
    marginTop: 15,
  },

  // ===========================================================
  // INTRO
  // ===========================================================

  introSection: {
    paddingHorizontal: 18,
    marginTop: 27,
    marginBottom: 15,
  },

  introTitle: {
    color: "#183A2B",
    fontSize: 21,
    fontWeight: "900",
  },

  introDescription: {
    color: "#7B8C84",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 5,
  },

  // ===========================================================
  // SEARCH
  // ===========================================================

  searchContainer: {
    height: 49,
    marginHorizontal: 18,
    marginBottom: 21,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2EBE5",
    shadowColor: "#173C2B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 11,
    color: "#1B3C2E",
    marginLeft: 9,
  },

  // ===========================================================
  // SECTION HEADER
  // ===========================================================

  sectionHeader: {
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitle: {
    color: "#183A2B",
    fontSize: 17,
    fontWeight: "900",
  },

  sectionSubtitle: {
    color: "#829189",
    fontSize: 9.5,
    marginTop: 3,
  },

  locationCount: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7F1EA",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },

  locationCountText: {
    color: "#356B54",
    fontSize: 9,
    fontWeight: "800",
  },

  // ===========================================================
  // LOCATION LIST
  // ===========================================================

  locationList: {
    paddingHorizontal: 18,
    gap: 13,
  },

  // ===========================================================
  // LOCATION CARD
  // ===========================================================

  locationCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    overflow: "hidden",
    shadowColor: "#173C2B",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 9,
    elevation: 3,
  },

  locationImageContainer: {
    height: 165,
    position: "relative",
  },

  locationImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },

  // ===========================================================
  // STATUS
  // ===========================================================

  statusBadge: {
    position: "absolute",
    top: 11,
    left: 11,
    backgroundColor: "rgba(42, 105, 76, 0.94)",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  statusBadgeFull: {
    backgroundColor: "rgba(185, 45, 45, 0.94)",
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#B9F0D0",
  },

  statusDotFull: {
    backgroundColor: "#FFD0D0",
  },

  statusText: {
    color: "#FFFFFF",
    fontSize: 8.5,
    fontWeight: "800",
  },

  statusTextFull: {
    color: "#FFFFFF",
  },

  // ===========================================================
  // FAVORITE
  // ===========================================================

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: "rgba(14, 38, 27, 0.42)",
    justifyContent: "center",
    alignItems: "center",
  },

  // ===========================================================
  // IMAGE LOCATION BADGE
  // ===========================================================

  imageLocationBadge: {
    position: "absolute",
    bottom: 10,
    left: 11,
    backgroundColor: "rgba(19, 55, 40, 0.76)",
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  imageLocationText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },

  // ===========================================================
  // LOCATION CARD CONTENT
  // ===========================================================

  locationCardContent: {
    padding: 13,
  },

  locationCardTitle: {
    color: "#193B2D",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 4,
  },

  locationDescription: {
    color: "#788A81",
    fontSize: 9.5,
    lineHeight: 14,
    marginBottom: 9,
  },

  locationInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  infoSmallIcon: {
    width: 23,
    height: 23,
    borderRadius: 8,
    backgroundColor: "#EAF3ED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },

  locationInfoText: {
    flex: 1,
    color: "#71837A",
    fontSize: 9.5,
  },

  // ===========================================================
  // DIVIDER
  // ===========================================================

  cardDivider: {
    height: 1,
    backgroundColor: "#EDF2EE",
    marginTop: 7,
    marginBottom: 9,
  },

  // ===========================================================
  // CARD FOOTER
  // ===========================================================

  locationCardFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  priceLabel: {
    color: "#8A9991",
    fontSize: 8,
    marginBottom: 1,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  priceText: {
    color: "#193B2D",
    fontSize: 14,
    fontWeight: "900",
  },

  priceUnit: {
    color: "#87968F",
    fontSize: 8.5,
    marginLeft: 3,
  },

  cardArrowButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#285E48",
    justifyContent: "center",
    alignItems: "center",
  },

  // ===========================================================
  // EMPTY STATE
  // ===========================================================

  emptyState: {
    marginHorizontal: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 30,
    alignItems: "center",
  },

  emptyIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E8F1EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  emptyTitle: {
    color: "#315344",
    fontSize: 13,
    fontWeight: "800",
  },

  emptyDescription: {
    color: "#899890",
    fontSize: 9,
    marginTop: 4,
  },

  // ===========================================================
  // INFORMATION BANNER
  // ===========================================================

  infoBanner: {
    marginHorizontal: 18,
    marginTop: 18,
    padding: 13,
    backgroundColor: "#E9F3EC",
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: "#28533F",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 2,
  },

  infoDescription: {
    color: "#70847A",
    fontSize: 8.5,
    lineHeight: 13,
  },

  // ===========================================================
  // FACILITY
  // ===========================================================

  facilitySection: {
    marginTop: 30,
  },

  facilityHeader: {
    paddingHorizontal: 18,
    marginBottom: 13,
  },

  facilityTitle: {
    color: "#183A2B",
    fontSize: 18,
    fontWeight: "900",
  },

  facilitySubtitle: {
    color: "#829189",
    fontSize: 9.5,
    marginTop: 3,
  },

  facilityGrid: {
    paddingHorizontal: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  facilityCard: {
    width: "48%",
    minHeight: 125,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 13,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#173C2B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 7,
    elevation: 2,
  },

  facilityIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#E9F3EC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  facilityCardTitle: {
    color: "#234535",
    fontSize: 10.5,
    fontWeight: "900",
    textAlign: "center",
  },

  facilityCardText: {
    color: "#829189",
    fontSize: 8,
    lineHeight: 12,
    textAlign: "center",
    marginTop: 4,
  },

  // ===========================================================
  // CTA
  // ===========================================================

  ctaContainer: {
    marginHorizontal: 18,
    marginTop: 28,
    borderRadius: 20,
    overflow: "hidden",
  },

  ctaBackground: {
    width: "100%",
    minHeight: 245,
  },

  ctaImage: {
    resizeMode: "cover",
  },

  ctaOverlay: {
    flex: 1,
    minHeight: 245,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  ctaIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  ctaTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },

  ctaDescription: {
    color: "#DCEAE1",
    fontSize: 9.5,
    lineHeight: 15,
    textAlign: "center",
    marginTop: 7,
  },

  ctaButton: {
    marginTop: 16,
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#2E7959",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  ctaButtonText: {
    color: "#FFFFFF",
    fontSize: 10.5,
    fontWeight: "800",
  },
});
