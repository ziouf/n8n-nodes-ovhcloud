# OVH Cloud Ip — Add Firewall Rule

> Opération `ipFirewallRuleCreatePost` · Fichier source : `nodes/OvhCloudIp/resources/firewall/ipFirewallRuleCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/ip/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `ip` | string | Oui |
| `ipOnFirewall` | string | Oui |
| `action` | options | Oui |
| `Deny` | — | — |
| `Permit` | — | — |
| `protocol` | options | Oui |
| `AH` | — | — |
| `ESP` | — | — |
| `GRE` | — | — |
| `ICMP` | — | — |
| `IPv4` | — | — |
| `TCP` | — | — |
| `UDP` | — | — |
| `sequence` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
