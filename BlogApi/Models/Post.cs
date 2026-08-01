namespace BlogApi.Models;
using System.ComponentModel.DataAnnotations;


public class Post
{
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
}