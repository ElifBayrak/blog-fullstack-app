namespace BlogApi.DTOs;
using System.ComponentModel.DataAnnotations;

public class UpdatePostDto
{
    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Content { get; set; } = string.Empty;
}