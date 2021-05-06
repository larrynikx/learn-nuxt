interface DonorStat {
  month: String
  year: String
  newDonors: Stat
  receivedDonors: Stat
  revivedDonors: Stat
  lostDonors: Stat
  totalDonors: Stat
  recruitmentBalance: Stat
}

interface Stat {
  value: number
  label: String
}
