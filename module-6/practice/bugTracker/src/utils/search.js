// Abstract binary search implementation
export function binarySearch(arr, target, comparator) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const compResult = comparator(arr[mid], target);
  
      if (compResult === 0) {
        return mid; // Found exact match
      } else if (compResult < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Not found
  }
  
  // Comparator for timestamps
  export const timestampComparator = (log, target) => {
    if (log.timestamp === target) return 0;
    return log.timestamp < target ? -1 : 1;
  };
  
  // Comparator for severity (low < medium < high < critical)
  const severityRank = {
    low: 0,
    medium: 1,
    high: 2,
    critical: 3
  };
  
  export const severityComparator = (log, target) => {
    const logRank = severityRank[log.severity.toLowerCase()] || 0;
    const targetRank = severityRank[target.toLowerCase()] || 0;
  
    if (logRank === targetRank) return 0;
    return logRank < targetRank ? -1 : 1;
  };
  
  // Generic search function that can be reused
  export function searchLogs(logs, key, target, comparator) {
    // First sort the logs by the key we're searching on
    const sortedLogs = [...logs].sort((a, b) => comparator(a, b[key]));
  
    // Then perform binary search
    const index = binarySearch(sortedLogs, target, (log, t) => comparator(log[key], t));
  
    if (index === -1) return [];
  
    // Find all matches (since there might be multiple logs with same timestamp/severity)
    const results = [sortedLogs[index]];
    
    // Check left
    let left = index - 1;
    while (left >= 0 && comparator(sortedLogs[left][key], target) === 0) {
      results.unshift(sortedLogs[left]);
      left--;
    }
  
    // Check right
    let right = index + 1;
    while (right < sortedLogs.length && comparator(sortedLogs[right][key], target) === 0) {
      results.push(sortedLogs[right]);
      right++;
    }
  
    return results;
  }