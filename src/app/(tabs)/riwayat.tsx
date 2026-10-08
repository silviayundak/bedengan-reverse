import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type FilterStatus = "Semua" | "Aktif" | "Selesai" | "Dibatalkan";

interface HistoryItem {
  id: string;
  title: string;
  category: string;
  status: "Aktif" | "Selesai" | "Dibatalkan";
  date: string;
  tickets: string;
  totalPrice: string;
  imageUri: string;
}

// Hanya ada 2 lokasi: Area Sungai dan Bedengan Camping Ground
const HISTORY_DATA: HistoryItem[] = [
  {
    id: "1",
    title: "Area Sungai",
    category: "BEDENGAN RESERVE",
    status: "Aktif",
    date: "12-14 September 2026",
    tickets: "2 Tiket",
    totalPrice: "Rp 350.000",
    imageUri:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    title: "Bedengan Camping Ground",
    category: "BEDENGAN RESERVE",
    status: "Selesai",
    date: "05-07 Juli 2026",
    tickets: "3 Tiket",
    totalPrice: "Rp 450.000",
    imageUri:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=500&q=80",
  },
];

export default function RiwayatScreen() {
  const [selectedFilter, setSelectedFilter] = useState<FilterStatus>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filters: FilterStatus[] = ["Semua", "Aktif", "Selesai", "Dibatalkan"];

  const filteredData = HISTORY_DATA.filter((item) => {
    const matchesFilter =
      selectedFilter === "Semua" || item.status === selectedFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <LinearGradient
      colors={["#E8F3EB", "#F2F8F4", "#E5EFE8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Bar */}
        <View style={styles.topHeader}>
          <TouchableOpacity style={styles.backBtn} activeOpacity={0.8}>
            <Ionicons name="arrow-back" size={20} color="#183328" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Riwayat Pemesanan</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="#788C82" />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari riwayat..."
            placeholderTextColor="#8C9E94"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setSelectedFilter(filter)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* History Cards List */}
        {filteredData.map((item) => (
          <HistoryCard key={item.id} item={item} />
        ))}

        {filteredData.length === 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={48} color="#8C9E94" />
            <Text style={styles.emptyText}>Tidak ada riwayat pemesanan</Text>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </LinearGradient>
  );
}

function HistoryCard({ item }: { item: HistoryItem }) {
  const getStatusBadgeStyle = (status: HistoryItem["status"]) => {
    switch (status) {
      case "Aktif":
        return {
          bg: "#DCFCE7",
          text: "#15803D",
        };
      case "Selesai":
        return {
          bg: "#E8EFEA",
          text: "#526B5C",
        };
      case "Dibatalkan":
        return {
          bg: "#FEE2E2",
          text: "#DC2626",
        };
    }
  };

  const statusStyle = getStatusBadgeStyle(item.status);

  return (
    <View style={styles.card}>
      {/* Top Header Card */}
      <View style={styles.cardHeader}>
        <View style={styles.titleWrapper}>
          <View style={styles.iconBg}>
            <Ionicons name="leaf-outline" size={16} color="#176B3A" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCategory}>{item.category}</Text>
          </View>
        </View>

        <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
          <Text style={[styles.statusText, { color: statusStyle.text }]}>
            {item.status}
          </Text>
        </View>
      </View>

      {/* Detail Content */}
      <View style={styles.cardContent}>
        <Image source={{ uri: item.imageUri }} style={styles.cardImage} />

        <View style={styles.detailsRight}>
          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={14} color="#6B7E74" />
            <Text style={styles.infoText}>{item.date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="ticket-outline" size={14} color="#6B7E74" />
            <Text style={styles.infoText}>{item.tickets}</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Footer Price & Action */}
      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.priceLabel}>Total Pembayaran</Text>
          <Text style={styles.priceValue}>{item.totalPrice}</Text>
        </View>

        <TouchableOpacity style={styles.detailBtn} activeOpacity={0.8}>
          <Text style={styles.detailBtnText}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 24,
  },

  // Header Bar
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#183328",
  },

  // Search Input
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 46,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: "#183328",
  },

  // Filter Pills
  filterContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    paddingRight: 10,
  },
  filterPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  filterPillActive: {
    backgroundColor: "#176B3A",
  },
  filterText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5B7366",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },

  // Card Style
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    paddingRight: 8,
  },
  iconBg: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#EBF5EE",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#183328",
  },
  cardCategory: {
    fontSize: 9,
    fontWeight: "700",
    color: "#8C9E94",
    marginTop: 1,
    letterSpacing: 0.5,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "800",
  },

  // Card Content
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  cardImage: {
    width: 65,
    height: 65,
    borderRadius: 14,
  },
  detailsRight: {
    flex: 1,
    gap: 6,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 11,
    color: "#5B7366",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#F0F4F1",
    marginVertical: 10,
  },

  // Card Footer
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    fontSize: 9,
    color: "#8C9E94",
    fontWeight: "600",
  },
  priceValue: {
    fontSize: 14,
    fontWeight: "800",
    color: "#183328",
    marginTop: 2,
  },
  detailBtn: {
    backgroundColor: "#EBF3EE",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  detailBtnText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#176B3A",
  },

  // Empty State
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 10,
  },
  emptyText: {
    fontSize: 13,
    color: "#8C9E94",
    fontWeight: "600",
  },
});
