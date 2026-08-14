# OVH Cloud Dedicated Cloud — Update VM Encryption KMS Server

> Opération `vmEncryptionKmsChangeProperties` · Fichier source : `nodes/OvhCloudDedicatedCloud/vmEncryption/kms/vmEncryptionKmsChangeProperties.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{kmsId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `kmsId` | number | Oui |
| `description` | string | — |
| `sslThumbprint` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
