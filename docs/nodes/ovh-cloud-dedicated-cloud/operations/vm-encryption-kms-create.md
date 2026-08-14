# OVH Cloud Dedicated Cloud — Create VM Encryption KMS Server

> Opération `vmEncryptionKmsCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/vmEncryption/kms/vmEncryptionKmsCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `description` | string | — |
| `ip` | string | Oui |
| `sslThumbprint` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
