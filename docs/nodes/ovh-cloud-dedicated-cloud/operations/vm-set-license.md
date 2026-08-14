# OVH Cloud Dedicated Cloud — Set a Managed License on Virtual Machine

> Opération `vmSetLicense` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmSetLicense.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |
| `bypassGuestOsFamilyCheck` | boolean | Oui |
| `kmsLicense` | options | Oui |
| `Windows 2016 Datacenter` | — | — |
| `Windows 2016 Standard` | — | — |
| `Windows 2016 Standard SQL2016 Standard` | — | — |
| `Windows 2016 Standard SQL2016 Web` | — | — |
| `Windows 2019 Datacenter` | — | — |
| `Windows 2019 Datacenter Core` | — | — |
| `Windows 2019 Standard` | — | — |
| `Windows 2019 Standard Core` | — | — |
| `Windows 2019 Standard SQL2019 Standard` | — | — |
| `Windows 2019 Standard SQL2019 Web` | — | — |
| `Windows 2019 Standard SQL2022 Standard` | — | — |
| `Windows 2019 Standard SQL2022 Web` | — | — |
| `Windows 2022 Datacenter` | — | — |
| `Windows 2022 Datacenter Core` | — | — |
| `Windows 2022 Datacenter SQL2019 Standard` | — | — |
| `Windows 2022 Datacenter SQL2019 Web` | — | — |
| `Windows 2022 Datacenter SQL2022 Standard` | — | — |
| `Windows 2022 Datacenter SQL2022 Web` | — | — |
| `Windows 2022 Standard` | — | — |
| `Windows 2022 Standard Core` | — | — |
| `Windows 2022 Standard SQL2019 Standard` | — | — |
| `Windows 2022 Standard SQL2019 Web` | — | — |
| `Windows 2022 Standard SQL2022 Standard` | — | — |
| `Windows 2022 Standard SQL2022 Web` | — | — |
| `Windows 2025 Datacenter` | — | — |
| `Windows 2025 Datacenter Core` | — | — |
| `Windows 2025 Datacenter SQL2022 Enterprise` | — | — |
| `Windows 2025 Datacenter SQL2022 Standard` | — | — |
| `Windows 2025 Datacenter SQL2022 Web` | — | — |
| `Windows 2025 Standard` | — | — |
| `Windows 2025 Standard Core` | — | — |
| `Windows 2025 Standard SQL2022 Standard` | — | — |
| `Windows 2025 Standard SQL2022 Web` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
