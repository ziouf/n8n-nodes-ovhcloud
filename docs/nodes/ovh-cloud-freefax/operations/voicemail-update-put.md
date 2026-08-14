# OVH Cloud Freefax — Update Voicemail Properties

> Opération `voicemailUpdatePut` · Fichier source : `nodes/OvhCloudFreefax/resources/voicemailUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/freefax/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `audioFormat` | options | — |
| `AIFF` | — | — |
| `AU` | — | — |
| `FLAC` | — | — |
| `MP3` | — | — |
| `OGG` | — | — |
| `WAV` | — | — |
| `doNotRecord` | boolean | — |
| `forcePassword` | boolean | — |
| `fromEmail` | string | — |
| `fromName` | string | — |
| `fullGreetingSoundId` | number | — |
| `greetingType` | options | — |
| `Default` | — | — |
| `Full` | — | — |
| `Short` | — | — |
| `keepMessage` | boolean | — |
| `shortGreetingSoundId` | number | — |
| `temporaryGreetingActivated` | boolean | — |
| `temporaryGreetingSoundId` | number | — |
| `unreadMessages` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
