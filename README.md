# Multiple Quality URL Generator for Jellyfin

Welcome to the **Multiple Quality URL Generator** guide for Jellyfin! This unofficial solution empowers you to take control of your media playback experience by manually crafting playback URLs with customizable quality settings. While Jellyfin doesn’t feature a dedicated "URL generator" for multiple quality options, this method unlocks a spectrum of viewing experiences tailored to your preferences.

## Overview

Jellyfin is a powerful, open-source media server that lets you manage and stream your media collection. By manipulating playback URLs with specific quality parameters, you can enjoy your content at resolutions like 1080p, 720p, or beyond—perfect for adapting to your device, bandwidth, or mood. This guide walks you through the process, offering a hands-on way to personalize your entertainment journey.

**Note**: This is a manual process, not an automated tool. For the latest details, always consult the [official Jellyfin documentation](https://jellyfin.org/docs/).

## Features

- **Flexible Quality Control**: Adjust playback quality (e.g., 1080p, 720p) via URL parameters.
- **Personalized Viewing**: Tailor each stream to your preferences or network conditions.
- **Simple Implementation**: No additional software required—just a basic understanding of Jellyfin’s URL structure.

## Prerequisites

- A running Jellyfin server (updated to the latest version as of February 22, 2025).
- Access to your Jellyfin server’s web interface or API.
- Basic knowledge of your media item IDs (found in the Jellyfin web client).

## How to Use

### Step 1: Identify Your Media Item
1. Open your Jellyfin web client.
2. Navigate to the media item (e.g., a movie or episode) you want to stream.
3. Note the **Item ID** from the URL or metadata (e.g., `12345678-1234-1234-1234-1234567890ab`).

### Step 2: Construct the Base Playback URL
The base URL follows this structure:
```
http://[YOUR_SERVER_ADDRESS]:8096/Videos/[ITEM_ID]/stream
```
- Replace `[YOUR_SERVER_ADDRESS]` with your Jellyfin server’s IP or domain (e.g., `192.168.1.100` or `jellyfin.mydomain.com`).
- Replace `[ITEM_ID]` with the media item’s ID.

Example:
```
http://192.168.1.100:8096/Videos/12345678-1234-1234-1234-1234567890ab/stream
```

### Step 3: Add Quality Parameters
Append the `Quality` parameter to specify your desired resolution. Use formats like `1080p`, `720p`, or others supported by your media and server settings.

Modified URL:
```
http://[YOUR_SERVER_ADDRESS]:8096/Videos/[ITEM_ID]/stream?Quality=[QUALITY_LEVEL]
```
- Replace `[QUALITY_LEVEL]` with your preferred quality (e.g., `1080p`, `720p`).

Examples:
- For 1080p:
  ```
  http://192.168.1.100:8096/Videos/12345678-1234-1234-1234-1234567890ab/stream?Quality=1080p
  ```
- For 720p:
  ```
  http://192.168.1.100:8096/Videos/12345678-1234-1234-1234-1234567890ab/stream?Quality=720p
  ```

### Step 4: Test Your URL
- Paste the URL into a compatible media player (e.g., VLC) or browser.
- Ensure you’re authenticated if required (add an API key or token as needed—see Jellyfin docs for details).

## Additional Tips

- **Authentication**: If your server requires it, append an API key:
  ```
  ?api_key=[YOUR_API_KEY]
  ```
  Example:
  ```
  http://192.168.1.100:8096/Videos/12345678-1234-1234-1234-1234567890ab/stream?Quality=1080p&api_key=abcdef123456
  ```
- **Dynamic Adjustments**: Experiment with other parameters like bitrate or codec settings (check Jellyfin’s API docs).
- **Stay Updated**: Jellyfin evolves rapidly—verify this method against the latest documentation.

## Limitations

- This is a manual process requiring URL crafting for each stream.
- Quality options depend on your media’s encoding and server transcoding capabilities.
- Not all clients may respect the `Quality` parameter—test thoroughly.

## Resources

- [Jellyfin Official Documentation](https://jellyfin.org/docs/)
- [Jellyfin API Reference](https://api.jellyfin.org/)
- [Jellyfin Community Forums](https://forum.jellyfin.org/)

## Contributing

Have a better way to generate quality-specific URLs? Share your ideas! This is an open guide—feel free to suggest improvements or scripts to automate the process.

## License

This guide is provided under the MIT License. Use it, tweak it, and enjoy your media your way!
